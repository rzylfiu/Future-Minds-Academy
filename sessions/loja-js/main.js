
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const bgGame = new Image();
bgGame.src = 'images/background.png';

bgGame.onload = function() {
  canvas.width = bgGame.naturalWidth;
  canvas.height = bgGame.naturalHeight;
  ctx.drawImage(bgGame, 0, 0);
};

const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function() {
    ctx.drawImage(catImg, 50, 0);
  };

  let mouseObj = {};
  mouseObj.width= 52;
  mouseObj.height= 54;
  mouseObj.x = Math.floor(Math.random()*512 - mouseObj.width);
  mouseObj.y = Math.floor(Math.random()*480 - mouseObjl.height);

const mouseImg = new Image();
mouseImg.scr = "images/mouse.png";
mouseImg.onload = function() {
    ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
  };

  if(mouseObj.x < 0){
    ctx.drawImage(mouse.img, 0, mouseObj.y);
    
  }
  else{
    ctx.drawImage(mouseImg,mouseObj.x, mouseObj.y);
  }

  function render(){
    if(bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if(catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if(mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }

    if(catObj.x > 500){ catObj.x=-50; }
    if(catObj.x < -51){ catObj.x=499; }

    if(catObj.y > 460){ catObj.y=-50; }
    if(catObj.y < 40){ catObj.y=41; }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: 0", 10, 25);

    ctx.fillText("Timer: "+ticTimer, 400, 25);

}

addEventListener("keydown", function (e) {

    /*
    switch(e.key){
    case 'ArrowRight':
        catObj.x +=catObj.speed;
        break;
    }
    */

    if(e.key == 'ArrowRight'){
        catObj.x +=catObj.speed;
    }
    if(e.key == 'ArrowLeft'){
        catObj.x -=catObj.speed;
    }
    if(e.key == 'ArrowDown'){
        catObj.y +=catObj.speed;
    }
    if(e.key == 'ArrowUp'){
        catObj.y -=catObj.speed;
    }
});

function timer(){
    ticTimer--;
}

setInterval(render,1); // thirre render cdo 1/1000 second
setInterval(timer, 1000);