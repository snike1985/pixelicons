class Tab {

    constructor(obj) {
        this.obj = obj;
        this.tabsControlsWrap = obj.getElementsByClassName('tab__controls')[0];
        this.tabsControls = obj.getElementsByClassName('tab__controls-item');
        // this.activeControl = this.tabsControls.getElementsByClassName('active')[0];
        this.tabsContentsWrap = obj.getElementsByClassName('tab__content')[0];
        this.tabsContents = obj.getElementsByClassName('tab__content-item');

        this.onEvents();
        this.initSlider();
    }

    onEvents() {
        this.obj.addEventListener('click', () => {
            console.log('click to object');
        });

        this.tabsControls.addEventListener('click', () => {
            let activeElem = this;

            console.log(this.className);
            // if ( !activeElem.hasClass('active') ) {
            //     _tabsControls.removeClass('active');
            //     activeElem.addClass('active');
            //     _sliding(activeElem);
            // }
        });

        // $(window).on({
        //     'resize': function () {
        //         _tabsControlsWrapLeft = _tabsControlsWrap.offset().left;
        //         _sliding(_tabsControlsWrap.find('.active'));
        //     }
        // });

    }
    // checkActiveControl = function() {
    //     if ( _activeControl.length > 0 ) {
    //         if ( _activeControl.length > 1 ) {
    //             _activeControl.removeClass('active');
    //             _activeControl.eq(0).addClass('active');
    //         }
    //     } else {
    //         _activeControl = _tabsControls.eq(0);
    //         _activeControl.addClass('active');
    //     }
    //     _sliding(_activeControl);
    //
    // }
    // sliding = function(elem) {
    //     _tabsSlider.css({
    //         'width': elem.outerWidth(),
    //         'left': (elem.offset().left - _tabsControlsWrapLeft) + 'px'
    //     });
    //     _showActiveContent(elem.index());
    // }
    // showActiveContent = function(activeIndex) {
    //     _tabsContent.removeClass('active');
    //     _tabsContent.eq(activeIndex - 1).addClass('active');
    //     _tabsContentWrap.css({ 'height': _tabsContent.eq(activeIndex - 1).outerHeight() + 'px' });
    // }
    initSlider() {
        let swiper = new Swiper(this.slider);
    }
}

let tabs = document.querySelectorAll('.tab');

tabs.forEach((obj) => {
    let tab = new Tab(obj);
});



