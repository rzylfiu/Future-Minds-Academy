const scrollers  = document.querySelector(".scroller");

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matched){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller)=> {
        scroll.setAttribute ("data-animated", true)
    });
}