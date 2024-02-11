import 'jquery'
import $ from "jquery";

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"

import "./vendor/lazyload";
import "./vendor/lazysized.unveilhooks";
import "./vendor/plugins/jquery.magnify.js"
import "./vendor/plugins/jquery.magnify-mobile.js"

import initFancyGallery from "./modules/fancyGallery"
import enableMagnify from './modules/enableMagnify.js';

document.addEventListener("DOMContentLoaded", () => {
  initFancyGallery();
  enableMagnify();
});