const moveSound = require("../assets/move.wav");
const beginSound = require("../assets/begin.wav");
const endSound = require("../assets/end.wav");
const backgroundMusic = require("../assets/cryptic.mp3");
const backgroundMusicAudio = new Audio(backgroundMusic);
var audioClick;
var curVolume = 1;
var pastVolume = null;
var muted = false;

playSound = sound => {
  if (audioClick) {
    audioClick.pause();
    audioClick.currentTime = 0;
    audioClick = null;
  }
  // TODO:Do we really need to destroy and reconstruct every time?
  let audio = new Audio(sound);
  audio.volume = curVolume;
  audioClick = audio;
  audio.play();
};

playAudio = audio => {
  audio.play();
};
// todo: remove
// is this necessary? TODO.
playAudioLoop = audio => {
  let promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(_ => {
        audio.type = "audio/mpeg";
        audio.loop = true;
      })
      .catch(error => {});
  }
};

stopAudio = audio => {
  audio.pause();
  audio.currentTime = 0;
};

stopSound = audio => {
  audio.pause();
  audio.currentTime = 0;
};

playMoveSound = () => {
  playSound(moveSound);
};

playBeginSound = () => {
  playSound(beginSound);
};

playEndSound = () => {
  playSound(endSound);
};

playBackgroundMusic = () => {
  playAudioLoop(backgroundMusicAudio);
};

stopBackgroundMusic = () => {
  stopSound(backgroundMusicAudio);
};

playPostGameMusic = () => {
  playAudio(postGameMusicAudio);
};

muteAll = () => {
  backgroundMusicAudio.volume = 0;
  pastVolume = curVolume;
  curVolume = 0;
  muted = true;
};

unmuteAll = () => {
  backgroundMusicAudio.volume = pastVolume;
  curVolume = pastVolume;
  muted = false;
};

raiseVolume = () => {
  if (!muted) {
    if (curVolume < 1) {
      curVolume = curVolume + 0.1;
      backgroundMusicAudio.volume = backgroundMusicAudio.volume + 0.1;
    }
  } else {
    unmuteAll();
    curVolume = curVolume + 0.1;
    backgroundMusicAudio.volume = backgroundMusicAudio.volume + 0.1;
  }
  return curVolume;
};

lowerVolume = () => {
  if (!muted) {
    if (curVolume > 0) {
      curVolume = curVolume - 0.1;
      backgroundMusicAudio.volume = backgroundMusicAudio.volume - 0.1;
    }
  } else {
    unmuteAll();
    curVolume = curVolume - 0.1;
    backgroundMusicAudio.volume = backgroundMusicAudio.volume - 0.1;
  }
  return curVolume;
};

module.exports = {
  playMoveSound,
  playBeginSound,
  playEndSound,
  playBackgroundMusic
};
