class Menu {

    constructor(obj) {
        this.obj = obj;
        this.menuWrap = obj.getElementsByClassName('menu__wrap')[0];
        this.btnOpen = document.getElementsByClassName('menu-open')[0];
        this.btnClose = obj.getElementsByClassName('menu__close')[0];
        this.body = document.getElementsByTagName('body')[0];

        this.onEvents();
    }

    onEvents() {
        this.obj.addEventListener('click', () => {
            this.obj.classList.remove('active');
            this.body.classList.remove('menu-active');
            return false;
        });
        this.btnOpen.addEventListener('click', () => {
            this.obj.classList.add('active');
            this.body.classList.add('menu-active');
            return false;
        });
        this.btnClose.addEventListener('click', () => {
            this.obj.classList.remove('active');
            this.body.classList.remove('menu-active');
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