import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSync,
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faVolumeMute,
  faVolumeUp,
  faCog,
  faTimes,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faSync,
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faVolumeMute,
  faVolumeUp,
  faCog,
  faTimes,
  faWindowClose
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
