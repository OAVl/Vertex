const menu = document.querySelector('.menu');
const buttonMenu = document.querySelector('.down-menu__burger');
const popupCart = document.querySelector('.popupCart');
const popupCartClose = document.querySelector('.popupCart__close');
const buttonCart = document.querySelector('.button-cart');
const buttonMenuMobile = document.querySelector('.down-menu__burger_mobile');
const menuMobile = document.querySelector('.menu-mobile');

function menuOpen () {
    menu.classList.toggle('menu_opened');
}

function popupCartOpen () {
    popupCart.classList.add('popupCartOpen');
}

function popupCartClosef () {
    popupCart.classList.remove('popupCartOpen');
}

function menuMobileOpen () {
    menuMobile.classList.toggle('menu-mobile__active');
}

buttonMenuMobile.addEventListener('click', menuMobileOpen);
buttonMenu.addEventListener('click', menuOpen);
buttonCart.addEventListener('click', popupCartOpen);
popupCartClose.addEventListener('click', popupCartClosef);

const buttonLike = document.querySelector('.product__like');
buttonLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('product__like_active');
  });