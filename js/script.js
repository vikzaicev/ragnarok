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

/*====================scroll========================*/
const menuLink = document.querySelectorAll(".menu__link")
menuLink.forEach((link) => {
   link.addEventListener('click', scrolSection)
})

function scrolSection(e) {
   e.preventDefault();

   const href = e.currentTarget.getAttribute("href");
   //console.log(href);

   if (!href && !href.startsWith("#")) return;

   const section = href.slice(1);
   const top = document.getElementById(section)?.offsetTop || 0;
   window.scrollTo({ top, behavior: "smooth" });
}

/*====================scroll========================*/

/*====================count================== ======*/
const formatVal = (value) => (value < 10 ? `0${value}` : value);

function countdown(to) {
   const id = setInterval(() => {
      let toCountDate = new Date(to);
      let currentDate = new Date();

      let totalSeconds = Math.floor((toCountDate - currentDate) / 1000);
      if (totalSeconds < 0) {
         clearInterval(id);
         return;
      }
      const seconds = totalSeconds % 60;
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const hours = Math.floor((totalSeconds / 3600) % 24);
      const days = Math.floor(totalSeconds / 86400)

      const secondsElem = document.getElementById('seconds')
      secondsElem.innerHTML = formatVal(seconds);

      const minutesElem = document.getElementById('minutes')
      minutesElem.innerHTML = formatVal(minutes);

      const hoursElem = document.getElementById('hours')
      hoursElem.innerHTML = formatVal(hours);

      const daysElem = document.getElementById('days')
      daysElem.innerHTML = formatVal(days);
   }, 1000)

}
countdown("28 apr 2023")

/*====================count========================*/

/*====================hamb==========================*/

const menu = document.querySelector('.menu');
const hamb = document.querySelector('.header__hamb');
//const body = document.querySelector('body');
//const popup = document.querySelector('.header__popup');
//console.log(hamb, menu);

//popup.append(menu.cloneNode(1));

hamb.addEventListener('click', hamburger);

function hamburger() {
   hamb.classList.toggle('activ');
   menu.classList.toggle('open');
   //body.classList.toggle('noscrol');
};

/*====================hamb=======================*/

/*===============video=================================*/
const video = document.querySelector('.aboutgame__video')
const videoBtn = document.querySelector('.aboutgame__btn')
let pley = false;

videoBtn.addEventListener('click', showVideo)

function showVideo({ target }) {
   pley = !pley;
   const info = target.parentElement;

   info.classList.toggle('hiden', pley)
   target.innerText = !pley ? 'PLAY' : 'PAUSE';
   pley ? video.play() : video.pause();
}

/*===============video=================================*/

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
const body = document.body
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal__bg')
const openModalBtn = document.querySelectorAll('.mod')
const CloseModalBtn = document.querySelector('.modal__close')
const subtitleModal = document.querySelector('.modal__subtitle')
const priseModal = document.querySelector('.form__prise')

const values = [
   {
      title: 'Standard Edition',
      prise: '19.99$'
   },
   {
      title: 'Standard Edition',
      prise: '18.99$'
   },
   {
      title: 'Digital Deluxe Edition',
      prise: '26.99$'
   }
]

openModalBtn.forEach((btn => {
   btn.addEventListener('click', openModal)

}))


function openModal(e) {
   const ind = e.target.getAttribute('data-set')
   if (!ind) return;
   const { title, prise } = values[ind]
   subtitleModal.innerText = title;
   priseModal.innerText = prise;
   modal.classList.add('active')
   body.classList.add('scroll')
   modalBg.classList.add('active')

}

CloseModalBtn.addEventListener('click', closeModal)

function closeModal() {
   modal.classList.remove('active')
   body.classList.remove('scroll')
   modalBg.classList.remove('active')
}

window.addEventListener('click', closePopupWin)

function closePopupWin(event) {
   if (event.target == modalBg) {
      modal.classList.remove('active')
      body.classList.remove('scroll')
      modalBg.classList.remove('active')
   }
}

/*===============popup=================================*/

/*===============swiper================================*/
// import "swiper/swiper.min.css";
// import "../styles/styles.scss";

//import Swiper from "swiper";
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

// const initSlider = () => {
//    new Swiper(".swiper", {
//      loop: true,
//      slidesPerView: 3,
//      spaceBetween: 20,
//      initialSlide: 2,
//      navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev",
//      },
//    });
//  };

/*===============swiper================================*/

/*===============FAQ===================================*/
const pluss = document.querySelectorAll('.faq__top')
pluss.forEach(plus => {
   plus.addEventListener('click', () => {
      const parentPlus = plus.closest(".faq__item")
      parentPlus.classList.toggle('open-qwesc')
      console.log(parentPlus);
   })
});

/*===============explore===============================*/
const span1 = document.querySelector('.span1')
const leftBtn = document.querySelectorAll('.explore__left')
const rihtBtn = document.querySelectorAll('.explore__riht')
//const dataSet = document.querySelectorAll('[data-set]')

//console.log(lefts);

leftBtn.forEach(left => {
   left.addEventListener('click', addActive)
})
rihtBtn.forEach(riht => {
   riht.addEventListener('click', addActive)
})

function addActive(e) {
   const parentEl = e.target.closest('.explore__item')
   const dataSet = parentEl.querySelectorAll('[data-set]')
   dataSet.forEach(el => {
      el.classList.toggle('active1')
   })
}


/*===============explore===============================*/