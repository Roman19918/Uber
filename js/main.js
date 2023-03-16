//Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.header__menu-close');


    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    });
}());