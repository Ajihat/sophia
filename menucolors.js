window.addEventListener("scroll", function(){
if (window.scrollY < headerHeight) {
    document.querySelector(".m1").style.color ="rgb(245,152,160)"
}

else {
    document.querySelector(".m1").style.color ="white"
}

})

window.addEventListener("scroll", function(){
    if (window.scrollY >= headerHeight && window.scrollY < headerHeight + servicesHeight)  {
        document.querySelector(".m2").style.color ="rgb(245,152,160)"}
        else {
            document.querySelector(".m2").style.color ="white"
        }
     
    })


window.addEventListener("scroll", function(){
    if (window.scrollY >= headerHeight + servicesHeight && window.scrollY < headerHeight + servicesHeight + albumsHeight)  {
        document.querySelector(".m3").style.color ="rgb(245,152,160)"}
        else {
            document.querySelector(".m3").style.color ="white"
        }
         
        })

        window.addEventListener("scroll", function(){
            if (window.scrollY >= headerHeight + servicesHeight + albumsHeight && window.scrollY < headerHeight + servicesHeight + albumsHeight + shopHeight)  {
                document.querySelector(".m4").style.color ="rgb(245,152,160)"}
                else {
                    document.querySelector(".m4").style.color ="white"
                }
                 
                })


                window.addEventListener("scroll", function(){
                    if (window.scrollY >= headerHeight + servicesHeight + albumsHeight + shopHeight && window.scrollY < headerHeight + servicesHeight + albumsHeight + shopHeight + aboutHeight)  {
                        document.querySelector(".m5").style.color ="rgb(245,152,160)"}
                        else {
                            document.querySelector(".m5").style.color ="white"
                        }
                         
                        })


                        window.addEventListener("scroll", function(){
                            if (window.scrollY >= headerHeight + servicesHeight + albumsHeight + shopHeight + aboutHeight  && window.scrollY < headerHeight + servicesHeight + albumsHeight + shopHeight + aboutHeight + contactHeight)  {
                                document.querySelector(".m6").style.color ="rgb(245,152,160)"}
                                else {
                                    document.querySelector(".m6").style.color ="white"
                                }
                                 
                                })

       


  
