const btnSubtract = document.querySelector("#btnSubtract");
const btn = document.querySelector("#btn");
const num = document.querySelector("#num");
let numCh = 1;


btn.addEventListener("click", myFun);

function myFun(){
    numCh++;
    num.textContent = numCh;
}

btnSubtract.addEventListener("click", subFun);
    

function subFun(){
   if( numCh !=0 ) { numCh--;}
    num.textContent = numCh;
}

