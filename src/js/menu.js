class Menu {

    constructor(obj) {
        this.obj = obj;
        this.menuWrap = obj.getElementsByClassName('menu__wrap')[0];
        this.btnOpen = document.getElementsByClassName('menu-open')[0];
        this.btnClose = obj.getElementsByClassName('menu__close')[0];
        this.scrollContainer = document.getElementsByTagName('html')[0];
        this.header = document.getElementsByClassName('site__header')[0];
        this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        this.onEvents();
    }

    onEvents() {
        window.addEventListener('scroll', () => {
            let curScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            if (curScroll > this.lastScrollTop){
                this.header.classList.add('hide');
            } else {
                this.header.classList.remove('hide');
            }

            this.lastScrollTop = curScroll;

            if ( curScroll > 0 ) {
                this.header.classList.add('site__header_fixed');
            } else {
                this.header.classList.remove('site__header_fixed');
                this.header.classList.remove('hide');
            }

        });
        this.obj.addEventListener('click', () => {
            this.obj.classList.remove('active');
            this.scrollContainer.classList.remove('menu-active');
            return false;
        });
        this.btnOpen.addEventListener('click', () => {
            this.obj.classList.add('active');
            this.scrollContainer.classList.add('menu-active');
            return false;
        });
        this.btnClose.addEventListener('click', () => {
            this.obj.classList.remove('active');
            this.scrollContainer.classList.remove('menu-active');
            return false;
        });
        this.menuWrap.addEventListener('click', (e) => {
            e.stopPropagation();
            return false;
        });
    }
}

let menu = document.querySelectorAll('.menu');

menu.forEach((obj) => {
    let newMenu = new Menu(obj);
});