
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const timerDV = document.querySelector("#timerDV");
const pointsDV = document.querySelector("#pointsDV");
const msg = document.querySelector("#msg");
const restartBTN = document.querySelector("#restartBTN");

let points = 0;
let timer = 15;
let winningTotal = 3;
let freezeCat = false;

let maca = {};
maca.width = 128;
maca.height = 128;
maca.color = "#ff0000";
maca.x = 200;
maca.y = 300;
maca.speed = 15;
let macaOn = false;



const myMaca = new Image();
myMaca.src = "cat.png";

myMaca.onload = function () {
    macaOn = true;
  
}




let miu = {};
miu.width = 50;
miu.height = 50;
miu.color = "#ff0000";
miu.x = Math.random() * canvas.width;
miu.y = Math.random() * canvas.height;
miu.speed = 10;
let miuOn = false;


const myMiu = new Image();
myMiu.src = "mouse.png";

myMiu.onload = function () {
    miuOn = true;
    
}

window.addEventListener("keydown", function (event) {
    if (!freezeCat){


    if (event.key === "ArrowRight") {
        maca.x += maca.speed;
     
    }
    else if (event.key === "ArrowLeft") {
        maca.x -= maca.speed;
  

    }
    else if (event.key === "ArrowUp") {
        maca.y -= maca.speed;
       
    }
    else if (event.key === "ArrowDown") {
        maca.y += maca.speed;
     
    }
}
});




function countDown(){
    if(timer < 0){
        clearInterval(timer);
    }
    else{timerDV.textContent = "Timer:" +  timer--;

    }
if( timer == 0){
    freezeCat = true;

    if ( points >= winningTotal ){
        msg.textContent = "You WON";
        
    }
    else{ msg.textContent = "You LOST";}


    restartBTN.style.visibility = "visible";
}



}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(macaOn){
        ctx.drawImage(myMaca, maca.x, maca.y);
    }
    if(miuOn){
        ctx.drawImage(myMiu, miu.x, miu.y);
    }

    if(maca.x > 750){maca.x = -60; }
    else if (maca.x < -60){maca.x = 730; }

    if(maca.y > 470){maca.y = -50; }
    else if (maca.y < -50){maca.y = 450; }

    pointsDV.textContent = "Points:  " + points;



if(
    maca.x + 105 > miu.x && maca.y < miu.y + 45
        && maca.x < miu.x + 20 && maca.y > miu.y - 120)
        {  


            miu.x = Math.random()*755;
            miu.y = Math.random()*455;

       
            points++;
        }
      

   
}

restartBTN.addEventListener("click", function(){
   window.location.reload();
});


setInterval(render, 1);
setInterval(countDown, 1000);