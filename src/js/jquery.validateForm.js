import $ from 'jquery';

"use strict";
( function(){

    $(function(){

        $('.validate-form').each( function() {
            new Validate( $(this) );
        } );

    });

    var Validate = function(obj) {

        //private properties
        var _obj = obj,
            _fields = _obj.find('.validate-form__field'),
            _items = _fields.find(':required'),
            _submit = _obj.find('button[type=submit]');

        //private methods
        var _addEvents = function() {

                _submit.on({
                    'click': function () {
                        console.log(123123);
                        var notValid = false;

                        _items.each(function () {
                            var curElem = $(this);

                            if ( !_validateField(curElem) ) {
                                notValid = true;
                            }
                        });

                        if ( notValid ) {
                            return false;
                        } else  {
                            return true;
                        }
                    }
                });

                _items.on({
                    'focus': function () {
                        $( this ).removeClass( 'not-touched' );
                        $( this ).removeClass( 'not-valid' );
                    }
                });

            },
            _makeNotValid = function ( field ) {
                field.addClass( 'not-valid' );
                field.removeClass( 'valid' );
            },
            _makeValid = function ( field ) {
                field.removeClass( 'not-valid' );
                field.addClass( 'valid' );
            },
            _validatePhone = function ( phone ) {
                var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
                return re.test(phone);
            },
            _validateEmail = function ( email ) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            _validateField = function ( field ) {
                var type = field.attr( 'type' );

                if ( type == 'email' ) {
                    if( !_validateEmail( field.val() ) ){
                        _makeNotValid( field );
                        return false;
                    }
                }

                if ( type == 'tel' ) {
                    if( !_validatePhone( field.val() ) ){
                        _makeNotValid( field );
                        return false;
                    }
                }

                if ( field.val() == '' ) {
                    _makeNotValid( field );
                    return false;
                }

                _makeValid( field );
                return true;
            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

} )();