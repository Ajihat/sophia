var popUp = document.querySelector(".popup");
var popUpCancel = document.querySelector(".cancel");
var btnAlbums = document.querySelector(".albums_content_left button")

btnAlbums.addEventListener("click", function(){
    popUp.classList.remove("popup_invisible")
})

popUpCancel.addEventListener("click", function(){
    popUp.classList.add("popup_invisible")
})

