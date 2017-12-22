import Swiper from 'swiper';

"use strict";
( function(){

    $(function(){

        $('.partners').each( function() {
            new Partners( $(this) );
        } );

    });

    var Partners = function(obj) {

        //private properties
        var _obj = obj,
            _list = _obj.find( '.partners__list' ),
            _hoverWave = _obj.find( '.partners__list-hoverwave' ),
            _items = _obj.find( '.partners__item-links a' ),
            _waveWidth = _hoverWave.width(),
            _waveHeight = _hoverWave.height(),
            _slider = _obj.find('.swiper-container'),
            _pagination = _obj.find('.swiper-pagination'),
            _swiper = null;

        //private methods
        var _addEvents = function() {

                _items.on({
                    'mouseenter': function() {
                        var curElem = $(this),
                            curX = curElem.offset().top - _list.offset().top,
                            curY = curElem.offset().left - _list.offset().left;

                        _hoverWave.css({
                            'top': curX - _waveHeight,
                            'left': curY - _waveWidth
                        });
                        _hoverWave.addClass('active');
                    },
                    'mouseleave': function() {

                        _hoverWave.removeClass('active');
                    }
                });

            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    slidesPerView: 6,
                    spaceBetween: 48,
                    loop: true,
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 48
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 48
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