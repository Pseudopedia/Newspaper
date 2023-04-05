// On Click Dropdown Menu in Java Script
let bar = document.querySelector(".menu-li");
   bar.onclick = function () {
    dar = document.querySelector(".dropdown");
    dar.classList.toggle("active");
    nar = document.querySelector(".nav-lar");
    nar.classList.toggle("active");
    haji = document.querySelector(".logout");
    haji.classList.toggle("active");
    
}
// End

let dino = document.querySelector(".col-k1");
dino.onclick = function () {
    dino.classList.toggle("active");
}

// Downdrop section shown Java Script Start
let hipo = document.querySelector(".see-all");
hipo.onclick = function() {
    hipo.classList.toggle("opend");
    iron = document.querySelector(".non-see");
    iron.classList.toggle("active");
}
// End

// Back To Top Java Script Start
let mars = document.querySelector(".back-to");
mars.onclick = function() {
    window.scrollTo(0, 0);
}
// End

// Dark Mode Java Script Start
let moon = document.getElementById("moon");
moon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if( document.body.classList.contains("dark-theme")){
        moon.src = "/Bande Matram/img/sun.png";
    }
    else{
        moon.src = "/Bande Matram/img/moon.png";
    }
}
// End


// Top Picks Section Java Script Start 
let slider = document.querySelector(".lanka");
let glider = document.querySelector(".lanka-stage");
glider.style.transform = "translate3d(5px, 0px, 0px)";
glider.style.transition = "all 0.25s ease 0s";
glider.style.width = "7452px";
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e) => {
   isDown = true;
   slider.classList.add('lanka-grab');

})

slider.addEventListener('mouseleave',() => {
    isDown = false;
    slider.classList.remove('lanka-grab');
})

slider.addEventListener('mouseup',() => {
    isDown = false;
    slider.classList.remove('lanka-grab');
})

slider.addEventListener('mousemove',() => {
    if(!isDown) return;
    console.count(isDown);
    
})

// End of Top Picks Section Java Script






