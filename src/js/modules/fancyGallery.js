import Swiper from "swiper";
import {EffectFade, Controller, Scrollbar, FreeMode} from "swiper/modules";

Swiper.use([EffectFade, Controller, Scrollbar, FreeMode])

export default function initFancyGallery() {
  const buttons = document.querySelectorAll(".js-gallery-button")
  const galleries = document.querySelectorAll(".js-content-gallery")
  
  function enableGallerySliders(gallery) {
    gallery.classList.add('--is-active')
    
    return new Swiper(gallery, {
      effect: 'fade',
      fadeEffect: true,
      watchActiveIndex: true,
      allowTouchMove: false
    })
  }
  
  function initController(galleryInstance, controllersButtons) {
    controllersButtons.forEach((controllerButton, buttonIndex) => {
      controllerButton.addEventListener("click", (event) => {
        controllersButtons.forEach((button) =>  button.classList.remove("--is-active"))
        
        controllerButton.classList.add("--is-active")
        galleryInstance.slideTo(buttonIndex)
      })
    })
  }
  
  function initScroll(controller) {
    new Swiper(controller, {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      mousewheel: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    })
  }
  
  buttons.forEach((button) => {
    const buttonAttr = button.dataset.gallery
    button.addEventListener("click", () => {

      galleries.forEach((gallery) => {
        const galleryAttr = gallery.dataset.gallery
        const controllersButtons =  gallery.querySelectorAll(".js-gallery-nav")
        
        if(galleryAttr === buttonAttr) {
       
          const galleryController = gallery.querySelector(".js-gallery-controller")
          const buttonClose = gallery.querySelector(".js-close-gallery")
          
          const galleryInstance = enableGallerySliders(gallery)
          initScroll(galleryController)
          initController(galleryInstance, controllersButtons)
          
          buttonClose.addEventListener("click", () => {
            gallery.classList.remove('--is-active')

            controllersButtons.forEach((button) =>  button.classList.remove("--is-active"))
            controllersButtons[0].classList.add("--is-active")
          })
        }
      })
    })
  })
}