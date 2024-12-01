const passwordInput = document.querySelector("#password");

passwordInput.addEventListener('mouseenter', function(){
    passwordInput.type = 'text';
});

passwordInput.addEventListener('mouseleave', function(){
    passwordInput.type = 'password';
})