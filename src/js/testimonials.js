import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper/dist/js/swiper.js';

class Testimonials {

    constructor(obj) {
        this.obj = obj;
        this.slider = obj.getElementsByClassName('swiper-container')[0];
        
        this.onEvents();
        this.initSlider();
    }

    onEvents() {
        this.obj.addEventListener('click', () => {
            console.log('click to object');
        });
    }

    initSlider() {
        let swiper = new Swiper(this.slider);
    }
}

let testimonialsSlider = document.querySelectorAll('.testimonials');

testimonialsSlider.forEach((obj) => {
    let testimonials = new Testimonials(obj);
});



