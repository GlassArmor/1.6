import Swiper,  {Pagination} from 'swiper';
Swiper.use([Pagination]);

let swiperContainers = document.querySelectorAll('.swiper');
let swiperWrappers = document.querySelectorAll('.swiper__wrapper');
let pagination = document.querySelectorAll('.swiper-pagination');
let swiperItems = [];
let swiper = [];
let swiperChecker = 0;

for (let i = 0; i < swiperContainers.length; i++) {
  swiperItems[i] = swiperWrappers[i].querySelectorAll('.swiper__slide');
}

console.log(swiperItems);

function checkSwiper() {
  if ( window.innerWidth < 768 && swiperChecker === 0) {
    for (let i = 0; i < swiperContainers.length; i++) {
      pagination[i].style.display = "block";
      swiperContainers[i].classList.add('swiper-container');
      swiperWrappers[i].classList.add('swiper-wrapper');
      for (let j = 0; j < swiperItems[i].length; j++) {
        swiperItems[i][j].classList.add('swiper-slide');
        if (i === 2) {
          swiperItems[i][j].style.height = "200px";
        }
      };
    };
    swiper = new Swiper('.swiper-container', {
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     loop: true,
     loopedSlides: 5,
     centeredSlides: true,
     width: 256
   });
    swiperContainers[2].style.height = '260px';
    swiperChecker = 1;
  } else {

    if (window.innerWidth >= 768 && swiperChecker === 1) {

      for (let i = 0; i < swiper.length; i++) {
        swiper[i].destroy();
        pagination[i].style.display = "none";

        swiperContainers[i].classList.remove('swiper-container');
        swiperWrappers[i].classList.remove('swiper-wrapper');
        for (let j = 0; j < swiperItems[i].length; j++) {
          swiperItems[i][j].classList.remove('swiper-slide');
          if (i === 2) {
            swiperItems[i][j].style.height = "64px";
          }
        }
        swiperChecker = 0;
    }
  }
}};

checkSwiper();

window.addEventListener('resize', function() {
  checkSwiper();
});
