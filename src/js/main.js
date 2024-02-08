import $ from "jquery";
import "./vendor/lazyload";
import "./vendor/lazysized.unveilhooks";
import "./vendor/blowup"

import initFancyGallery from "./modules/fancyGallery"
import initMagnifier from "./modules/magnifier";


document.addEventListener("DOMContentLoaded", () => {
  initFancyGallery()
  initMagnifier()
});