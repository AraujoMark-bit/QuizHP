var questionBank = [{
        question: 'Qual o nome do diretor da escola de Hogwarts ?',
        option: ['Dumbledore', 'Robert', 'Harry', 'Rony'],
        answer: 'Dumbledore'
    },
    {
        
        question: 'Qual é o animal de estimação do harry potter ?',
        option: ['Lagarto', 'Gato', 'Coruja', 'Tartaruga'],
        answer: 'Coruja'
    },
    {
        question: 'Qual o nome da rua onde harry viveu com seus tios ?',
        option: ['Rua Matilda n 245', 'Rua Clement of street', 'Rua dolores street', 'Rua dos Alfineiros'],
        answer: 'Rua dos Alfineiros'
    },
    {
        question: 'Qual o nome do principal vilão do filme ?',
        option: ['Lord Voldemort', 'Lúcio Malfoy', 'Severus Snape', 'Sirius Black'],
        answer: 'Lord Voldemort'
    },
    {
        question: 'Em qual filme harry nadou com sereias ?',
        option: ['Hp. E a pedra filosofal', 'Hp. E o cálice de fogo', 'Hp. E a ordem da fenix', 'Hp. E as reliquias da morte'],
        answer: 'Hp. E o cálice de fogo'
    },
    {
        question: 'Quem colocou o nome do Harry no cálice de fogo ?',
        option: ['Olho tonto Moody', 'Dumbledore', 'Victor Krum', 'Ele mesmo'],
        answer: 'Olho tonto Moody'
    },
    {
        question: 'A poção polissuco tinha qual efeito para o quem bebia ?',
        option: ['Ficar bebado', 'Virar coruja', 'Voar durante minutos', 'Transformar em outros seres'],
        answer: 'Transformar em outros seres'
    },
    {
        question: 'Qual era a raça do Dobby ?',
        option: ['Preguiça', 'Anão', 'Elfo', 'Mistura de Anão/Elfo'],
        answer: 'Elfo'
    },
    {
        question: 'Qual era o patrono de harry ?',
        option: ['Gato', 'Cavalo', 'Fenix', 'Cervo'],
        answer: 'Cervo'
    },
    {
        question: 'Qual o nome da magia negra que fazia com o que Voldemort tinha sua alma dividida ?',
        option: ['Polisuco', 'Revelius', 'Avada Kedavra', 'Horcruxes'],
        answer: 'Horcruxes'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}
next.addEventListener('click', nextQuestion);

function backToQuiz() {
    location.reload();
}

function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();