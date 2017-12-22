let menuOpen = document.getElementsByClassName('menu-open')[0],
    menu = document.getElementsByClassName('menu')[0],
    menuWrap = document.getElementsByClassName('menu__wrap')[0],
    menuClose = document.getElementsByClassName('menu__close')[0];

menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
    return false;
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    return false;
});
menu.addEventListener('click', () => {
    menu.classList.remove('active');
    return false;
});
menuWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    return false;
});