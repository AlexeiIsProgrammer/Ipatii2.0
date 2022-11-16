import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

document.querySelectorAll('.slider__description').forEach(el => {
  if(el.innerHTML.length > 120) {
    el.innerHTML = `${el.innerHTML.substring(0, 120)}...`
  }
})