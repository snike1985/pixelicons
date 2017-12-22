import Swiper from 'swiper';

"use strict";
( function(){

    $(function(){

        $('.shareholders').each( function() {
            new Shareholders( $(this) );
        } );
    });

    var Shareholders = function(obj) {

        //private properties
        var _obj = obj,
            _slider = _obj.find('.swiper-container'),
            _pagination = _obj.find('.swiper-pagination'),
            _swiper = null;

        //private methods
        var _addEvents = function() {

                $(window).on({
                    'load': function() {

                    }
                });

            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    slidesPerView: 5,
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    pagination: {
                        el: _pagination,
                        clickable: true
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }
                });
            },
            _init = function() {
                _addEvents();
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

} )();