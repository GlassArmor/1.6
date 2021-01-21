
import Swiper, { Pagination } from 'swiper';
//import 'swiper/swiper-bundle.css';
import '../scss/style.scss';
import '../js/swiper_init.js';
import '../js/showbuttons.js';
import '../js/closebuttons.js';

let burger = document.querySelector('.burger');
let feedback = document.querySelector('.modal--feedback');
let callback = document.querySelector('.modal--callback');
resizeModal();
window.addEventListener('resize', function(){
  resizeModal();
});

function resizeModal() {
  if ( window.innerWidth >= 768) {
    burger.style.height = document.body.clientHeight.toString()+'px';
    feedback.style.height = document.body.clientHeight.toString()+'px';
    callback.style.height = document.body.clientHeight.toString()+'px';
    if ( window.innerWidth > 1439 ) {
      burger.style.display = 'block';
    } else {
      burger.style.display = 'none'
    }
  }
};
