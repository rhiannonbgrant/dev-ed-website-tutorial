let controller;
let slideScene;

function animateSliders {
//Init Controller
controller = new ScrollMagic.Controller();
//Select some things
const sliders = document.querySelectorAll(".slide");
const nav = document.querySelector(".nav-header");
//Loop over each slide
sliders.forEach(slide => {
    const revealing = slide.querySelector('.reveal-img');
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    gsap.to(revealImg,1,{x:});
})
}