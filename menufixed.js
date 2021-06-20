var navMenu = document.querySelector("nav");

window.addEventListener("scroll", function(){
    var scrollPosition = window.pageYOffset;
    if(scrollPosition > 1){
        navMenu.classList.add("menufixed");
    } else {
        navMenu.classList.remove("menufixed");
    }
})