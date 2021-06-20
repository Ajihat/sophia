const header = document.querySelector("header")
const headerHeight = header.clientHeight;


window.addEventListener("scroll", function(){
    var scrollPosition = window.pageYOffset;
    var headerOpacity = ((headerHeight - scrollPosition) / (headerHeight));
    header.style.opacity = headerOpacity;
})










