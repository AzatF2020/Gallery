import Swiper from "swiper";
import {EffectFade, Controller} from "swiper/modules";
import "swiper/css"
import "swiper/css/effect-fade"

Swiper.use([EffectFade, Controller])

export default function initFancyGallery() {
  const buttons = document.querySelectorAll(".js-gallery-button")
  const galleries = document.querySelectorAll(".js-content-gallery")
  
  function enableGallerySliders(gallery) {
    gallery.classList.add('--is-active')
    
    return new Swiper(gallery, {
      effect: 'fade',
      fadeEffect: true,
      watchActiveIndex: true,
    })
  }
  
  function initController(galleryInstance, galleryController) {
    const controllersButtons =  [...galleryController.children]
    
    controllersButtons.forEach((controllerButton, buttonIndex) => {
      controllerButton.addEventListener("click", (event) => {
        controllersButtons.forEach((button) =>  button.classList.remove("--is-active"))
        
        controllerButton.classList.add("--is-active")
        galleryInstance.slideTo(buttonIndex)
      })
    })
  }
  
  buttons.forEach((button) => {
    const buttonAttr = button.dataset.gallery
    button.addEventListener("click", () => {
      console.log(button)

      galleries.forEach((gallery) => {
        const galleryController = gallery.querySelector(".js-gallery-controller")
        const galleryAttr = gallery.dataset.gallery
        
        if(galleryAttr === buttonAttr) {
          const galleryInstance = enableGallerySliders(gallery)
          initController(galleryInstance, galleryController)
        }
      })
    })
  })
}