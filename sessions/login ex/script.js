const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");
const msg = document.querySelector("#msg");


let emailUser = 'info@futureminds.io';
let paddUser ='Fma#2024';


loginBtn.addEventListener("click", function (){
   if(email.value == emailUser && password.value == paddUser){
   msg.innerHTML= `<span style="color: green">Correct</span>`;
   }
   else{
    msg.innerHTML= `<span style="color: red">Incorrect</span>`;

   }
})