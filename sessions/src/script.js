const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");


let usernametxt = "Fma";
let passwordtxt = "Fma#2024"


loginBtn.addEventListener("click", function(){
    if(username.value == usernametxt && password.value == passwordtxt){
        alert("Correct");
    }

    else{
        alert("Incorrect");
    }
})