
<style scoped lang="less">
.btn-mini {
  font-size: 2em;
  background-color: transparent;
  border: 0;
  color: white;
  outline: none;
}

.current-volume{
  font-size: 2em;
  color: white;
  align-self: center;
}

.volume-panel{
    align-self:flex-end;
}

.btn-mini :hover{
  color:lightgray;
}

.btn-mini :active {
    transition: transform 0.1s;
    transform: scale(0.9);
    opacity: 0.8;
}

.sound-options-panel{
  position: fixed;
  top: 4em;
  right:0em;
  width: 100%;
  padding: 3rem 3em;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius:1em;
  z-index:10;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.options-items-wrapper{
  display: flex;
  justify-content: space-between;
}

.option-item-buttons{
  display: flex;
  flex-direction:row;
  justify-content: center;
}


// Small devices (landscape phones, less than 768px)
@media (max-height: 767.98px) {
      .btn-mini {
        font-size: 1.5em;
      }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
      .btn-mini {
        font-size: 1.5em;
      }
}

</style>



<script>

export default {
    name:"VolumeIcon",
    props:{
        boardSizePx: { type: Number, default: 0 },
    },
    data() {
        return{
        soundPlaying:true,
        optionsOpen: false,
        curVolume: 10
        }
    },
    methods:{
        raiseVolume(){
            this.curVolume = (raiseVolume() * 10).toFixed();
            this.soundPlaying = true;
        },
        lowerVolume(){
            this.curVolume = (lowerVolume() * 10).toFixed();
            this.soundPlaying = true;
        },
        muteSound(){
            this.soundPlaying = false;
            muteAll()
        },
        unmuteSound(){
            this.soundPlaying = true;
            unmuteAll()
        },
        openOptions(){
            this.optionsOpen = true;
        },
        closeOptions(){
            this.optionsOpen = false;
        },
        iconTokenStyle() {
            return {
              fontsize: this.boardSizePx / 7.6 + "px",
            }
        }
    }
}
</script>



<template>
    <div class="volume-panel" >
        <button v-if="!optionsOpen" class="btn-mini" @click="openOptions" >
             <font-awesome-icon icon="volume-up" ></font-awesome-icon>
        </button> 
    <transition name="fade">   
    <div v-if="optionsOpen" class="sound-options-panel">
    
        <div class="options-items-wrapper">
            <button v-if="soundPlaying" class="btn-mini" @click="muteSound">
                <font-awesome-icon icon="volume-mute" ></font-awesome-icon>
            </button>
            <button v-if="!soundPlaying" class="btn-mini" @click="unmuteSound">
                    <font-awesome-icon icon="volume-up"></font-awesome-icon>
            </button>
            <div class="option-item-buttons">
                <button class="btn-mini" @click="lowerVolume">
                    <font-awesome-icon icon="minus"></font-awesome-icon>
                </button>        
                <div class='current-volume'>
                {{curVolume}}
                </div>
                <button class="btn-mini" @click="raiseVolume">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </button>
            </div>
            <button v-if="optionsOpen" class="btn-mini" @click="closeOptions">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </button>    
        </div>
    </div>
    </transition>
</div>
</template>



