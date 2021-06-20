var servicesText = document.querySelector(".section_content_text_invisible")
var servicesGallery = document.querySelector(".section_content_gallery_invisible")
var albumsText = document.querySelector(".albums_content_left_invisible")
var albumsImg = document.querySelector(".albums_content_right_invisible")
var shopText = document.querySelector(".shop_text_invisible")
var shopGallery = document.querySelector(".shop_content_invisilbe")
var aboutText = document.querySelector(".about_text_right_invisible")
var aboutImg = document.querySelector(".about_content_left_invisible")
var contactText = document.querySelector(".contact_content_left_invisible")
var contactImg = document.querySelector(".contact_content_right_invisible")
window.addEventListener("scroll", function(){
    var scrollPosition = window.pageYOffset;
    if (scrollPosition > 0.4 * headerHeight) {
        servicesText.classList.remove("section_content_text_invisible");
    }

    if (scrollPosition > 0.8 * headerHeight) {
        servicesGallery.classList.remove("section_content_gallery_invisible");
    }

    if (scrollPosition >  headerHeight + 0.6 * servicesHeight) {
        albumsText.classList.remove("albums_content_left_invisible");
        albumsImg.classList.remove("albums_content_right_invisible");
    }

    if (scrollPosition >  headerHeight + servicesHeight + 0.6 * albumsHeight) {
        shopText.classList.remove("shop_text_invisible");
        shopGallery.classList.remove("shop_content_invisilbe");
    }

    if (scrollPosition >  headerHeight + servicesHeight + albumsHeight + 0.6 * shopHeight) {
        aboutText.classList.remove("about_text_right_invisible");
        aboutImg.classList.remove("about_content_left_invisible");
    }

    if (scrollPosition >  headerHeight + servicesHeight + albumsHeight + shopHeight + 0.6 * contactHeight) {
        contactText.classList.remove("contact_content_left_invisible");
        contactImg.classList.remove("contact_content_right_invisible");
    }
})