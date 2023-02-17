/*=============animItems================*/

const animItems = document.querySelectorAll('.amim-items');
if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         //*console.log(animItemPoint);
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         }
         else {
            if (!animItem.classList.contains('anim-no'))
               animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect();
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll()
   }, 400);
}

/*=============animItems================*/

/*====================hamb==========================*/

const menu = document.querySelector('.menu');
const hamb = document.querySelector('.header__hamb');
//const body = document.querySelector('body');
//const popup = document.querySelector('.header__popup');
console.log(hamb, menu);

//popup.append(menu.cloneNode(1));

hamb.addEventListener('click', hamburger);

function hamburger() {
   hamb.classList.toggle('activ');
   menu.classList.toggle('open');
   //body.classList.toggle('noscrol');
};

/*====================hamb=======================*/

/*===============tab===================================*/

function tabs(elements) {
   for (let index = 0; index < elements.length; index++) {
      const item = elements[index];

      item.addEventListener("click", numbActiv);

      function numbActiv() {
         elements.forEach(element => {
            element.classList.remove('active')
         });
         item.classList.add('active')
      }
   }
}

const fn = document.querySelectorAll('.fn');
//tabs(fn)
/*===============tab===================================*/

/*===============popup=================================*/
//const body = document.body
// const popup = document.querySelector('.popup')
// const settingsBtn = document.querySelector('.settings')
// const settingsCloseBtn = document.querySelector('.settings__bott')

// settingsBtn.addEventListener('click', openPopup)

// function openPopup() {
//   popup.classList.add('active')
//   body.classList.add('scroll')
// }

// settingsCloseBtn.addEventListener('click', closePopup)

// function closePopup() {
//   popup.classList.remove('active')
//   body.classList.remove('scroll')
// }

// window.addEventListener('click', closePopupWin)

// function closePopupWin(event) {
//   if (event.target == popup) {
//     popup.classList.remove('active')
//     body.classList.remove('scroll')
//   }
// }

/*===============popup=================================*/

/*===============swiper================================*/
// import "swiper/swiper.min.css";
// import "../styles/styles.scss";

import Swiper from "swiper";
// import Swiper from 'swiper/dist/js/swiper.min.js';
// const swiper = new Swiper('swiper', {
//    // Optional parameters
//    direction: 'vertical',
//    loop: true,

//    // If we need pagination
//    // pagination: {
//    //    el: '.swiper-pagination',
//    // },

//    // Navigation arrows
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },

//    // And if we need scrollbar
//    scrollbar: {
//       el: '.swiper-scrollbar',
//    },
// });

const initSlider = () => {
   new Swiper(".swiper", {
     loop: true,
     slidesPerView: 3,
     spaceBetween: 20,
     initialSlide: 2,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
 };

/*===============swiper================================*/