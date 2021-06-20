var shopBtn1 = document.querySelector(".b1");
var shopBtn2 = document.querySelector(".b2");
var shopBtn3 = document.querySelector(".b3");
var nature = ["nature1.jpg","nature2.jpg","nature3.jpg","nature4.jpg","nature5.jpg","nature6.jpg",];
var city = ["city1.jpg","city2.jpg","city3.jpg","city4.jpg","city5.jpg","city6.jpg"]
var people = ["people1.jpg","people2.jpg","people3.jpg","people4.jpg","people5.jpg","people6.jpg"]
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var s4 = document.querySelector(".s4");
var s5 = document.querySelector(".s5");
var s6 = document.querySelector(".s6");


shopBtn1.addEventListener("click", function(){
    shopBtn3.classList.remove("active_btn");
    shopBtn2.classList.remove("active_btn");
    shopBtn1.classList.add("active_btn"); 
    //Zmienienie zawartosci tła po kliknieciu
    s1.style.backgroundImage = `url(${nature[0]})`;
    s2.style.backgroundImage = `url(${nature[1]})`;
    s3.style.backgroundImage = `url(${nature[2]})`;
    s4.style.backgroundImage = `url(${nature[3]})`;
    s5.style.backgroundImage = `url(${nature[4]})`;
    s6.style.backgroundImage = `url(${nature[5]})`;
})


shopBtn2.addEventListener("click", function(){
    shopBtn3.classList.remove("active_btn");
    shopBtn2.classList.add("active_btn");
    shopBtn1.classList.remove("active_btn");
    //Zmienienie zawartosci tła po kliknieciu
    s1.style.backgroundImage = `url(${city[0]})`;
    s2.style.backgroundImage = `url(${city[1]})`;
    s3.style.backgroundImage = `url(${city[2]})`;
    s4.style.backgroundImage = `url(${city[3]})`;
    s5.style.backgroundImage = `url(${city[4]})`;
    s6.style.backgroundImage = `url(${city[5]})`;
})

shopBtn3.addEventListener("click", function(){
    shopBtn3.classList.add("active_btn");
    shopBtn2.classList.remove("active_btn");
    shopBtn1.classList.remove("active_btn");
        //Zmienienie zawartosci tła po kliknieciu
        s1.style.backgroundImage = `url(${people[0]})`;
        s2.style.backgroundImage = `url(${people[1]})`;
        s3.style.backgroundImage = `url(${people[2]})`;
        s4.style.backgroundImage = `url(${people[3]})`;
        s5.style.backgroundImage = `url(${people[4]})`;
        s6.style.backgroundImage = `url(${people[5]})`;
})