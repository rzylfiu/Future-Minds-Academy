const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const timer_sec = document.querySelector('.timer_sec');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const total_que = document.querySelector('.total_que');
const next_btn = document.querySelector('.next_btn');

let timer = 15;
let activeQuestion = 0;


start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');

});

exit_quiz.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    startQuiz();
    loadQuestion(activeQuestion);
    next_btn.classList.add('show');

})

next_btn.addEventListener('click', function(){
    if(activeQuestion  < questions.length - 1 ){
    activeQuestion++;
    
    loadQuestion(activeQuestion);
}
    
});

function startQuiz() {
    let timeCount = setInterval(() => {
        timer_sec.textContent = timer;
        if (timer > 0) { timer-- }
        else { clearInterval (timeCount);}


    }, 1000);
}

function loadQuestion (q){
   
    let allOptions = questions[q].options;

    que_text.textContent = questions[q].question;
option_list.innerHTML = '';

    for(let i=0; i< allOptions.length; i++){
    option_list.innerHTML += `
    <div class="option" onclick ="checkAnswer(${q}, ${i})">
    <span>${allOptions[i]}</span>
    </div
    `;
}

total_que.textContent = q + 1 +'/' + questions.length + ' questions';
}


function checkAnswer(q, o) {


    if (questions[q].answer === questions[q].options[o]) {
        console.log("Correct Answer!");
    } else {
        console.log("Wrong Answer!");
    }
}

