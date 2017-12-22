import Swiper from 'swiper';

"use strict";
( function(){

    $(function(){

        $('.infrastructure').each( function() {
            new Infrastructure( $(this) );
        } );

    });

    var Infrastructure = function(obj) {

        //private properties
        var _obj = obj,
            _sliders = _obj.find('.infrastructure__slider');

        //private methods
        var _addEvents = function() {

            $(window).on({
                'resize': function () {

                }
            });

            },
            _initSlider = function(wrap) {
                var container = $(wrap).find('.swiper-container'),
                    pagination = $(wrap).find('.swiper-pagination'),
                    next = $(wrap).find('.swiper-button-next'),
                    prev = $(wrap).find('.swiper-button-prev'),
                    swiper = new Swiper(container, {
                        loop: true,
                        pagination: {
                            el: pagination,
                            clickable: true,
                        },
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
                        },
                });
            },
            _init = function() {
                _addEvents();

                for ( var i = 0 ; i < _sliders.length; i++ ) {
                    _initSlider(_sliders[i])
                }
            };

        //public properties

        //public methods

        _init();
    };


} )();