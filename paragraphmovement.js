var paragraphServices = document.querySelector(".services p");
var paragraphAlbums = document.querySelector(".albums p");
var paragraphShop = document.querySelector(".shop p");
var paragraphAbout = document.querySelector(".about p");
var paragraphContact = document.querySelector(".contact p");
var servicesHeight = document.querySelector(".services").clientHeight;
var albumsHeight = document.querySelector(".albums").clientHeight;
var shopHeight = document.querySelector(".shop").clientHeight;
var aboutHeight = document.querySelector(".shop").clientHeight;
var contactHeight = document.querySelector(".contact").clientHeight;

window.addEventListener("scroll", function(){
    var scrollPosition = window.pageYOffset;
    var pMoveServices = ((headerHeight - scrollPosition) * 0.6);
    paragraphServices.style.left = `calc(50% + ${pMoveServices}px)`; // Przesuwanie paragrafu w SERVICES

    var pMoveAlbums = ((servicesHeight + headerHeight -  scrollPosition) * 0.6);
    paragraphAlbums.style.right = `calc(50% + ${pMoveAlbums}px)`; // Przesuwanie paragrafu w ALBUMS

    var pMoveShop = ((servicesHeight + headerHeight + albumsHeight -  scrollPosition) * 0.6);
    paragraphShop.style.left = `calc(50% + ${pMoveShop}px)`; // Przesuwanie paragrafu w SHOP

    var pMoveAbout = ((servicesHeight + headerHeight + albumsHeight + shopHeight -  scrollPosition) * 0.6);
    paragraphAbout.style.right = `calc(50% + ${pMoveAbout}px)`; // Przesuwanie paragrafu w ABOUT

    var pMoveContact = ((servicesHeight + headerHeight + albumsHeight + shopHeight + contactHeight -  scrollPosition) * 0.6);
    paragraphContact.style.left = `calc(50% + ${pMoveContact}px)`; // Przesuwanie paragrafu w CONTACT
})



