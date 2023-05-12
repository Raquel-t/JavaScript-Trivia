// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// My Questions!!!!
const questions = [
    {
        question: "Arrays in JavaScript are defined by which of hte following statements?",
        answers: [
            { text: "It is an ordered list of values", correct: true },
            { text: "It is an ordered list of objects", correct: false}, 
            { text: "It is an ordered list of string", correct: false},
            { text: "It is an ordered list of functions", correct: false},
        ]
    },
    {
        question:"How can you add a comment in JavaScript?",
        answers: [
            { text: "//This is a comment", correct: true},
            { text: "`This is a comment", correct: false},
            { text: "<!--This is a Comment-->", correct: false},
            { text: "This is a comment", correct: false},
        ] 
    },
    {
        question:"How do you call a function named \"myFunction\"?",
        answers: [
            { text: "call myFunction()", correct: false},
            { text: "myFunction()", correct: true},
            { text: "function:myfunction()", correct: false},
            { text: "function myFunction", correct: false},
        ]    
    },
    {
        question:"How do you round the number 7.25, to the nearest integer?",
        answers: [
            { text: "rnd(7.25)", correct: false},
            { text: "Math.rnd(7.25)", correct: false},
            { text: "round(7.25)", correct: false},
            { text: "Math.round(7.25)", correct: true},
        ]    
    },
    {
        question:"How do you declare a JavaScript variable?",
        answers: [
            { text: "v carName;", correct: false},
            { text: "variable carName;", correct: false},
            { text: "var carName;", correct: true},
            { text: "var carname;", correct: false},
        ]    
    },
    {
        question: "What is the correct place to insert a JavaScript",
        answers: [
            { text: "The <body> section", correct: false},
            { text: "The <head> section", correct: false},
            { text: "Both the <head> and the <body> section are correct", correct: true},
            { text: "The <footer> section", correct: false},
        ]    
    }

];

const questionElement = document.getElementById("question");
const timerDisplay = document.getElementById("timerDisplay");

// part 1 of HTML
var starter = document.querySelector(".starter");
// var openingDiv = document.getElementsById("start");
var buttonClick = document.getElementById("startQuiz");

// part 2 of HTML
var quizContainer = document.getElementById(".quizContainer");
var question = document.getElementById("question");
var option1 = document.getElementById("ch1");
var option2 = document.getElementById("ch2");
var option3 = document.getElementById("ch3");
var option4 = document.getElementById("ch4");
var response = document.getElementById("response");

// part 3 of HTML
var end = document.querySelector(".end");
var timeUp = document.getElementById("timeUp");
var endScore = document.getElementById('endScore');
var initialBar = document.getElementById("initialBar")
var initialButton = document.getElementById("initialButton");



var scoreScreen = document.querySelector(".scoreScreen");

var chart = document.getElementById("chart");
var goBack = document.getElementById("goBach");
var chearH = document.getElementById("clearH");
var viewHighScore = document.getElementById("viewHighScore");
var scoreChart = document.getElementById("#scoreChart");

let questionindex = 0;
var quizTime = 60
var qnumber = 0;
var qAnswer = "";
var scoreResult = 0;
var timeLeft = quizTime;
let highScores = [];
let quizEnded = false;


// quiz timer function

function qTimer() {
    qStart()
    quizTime = 60

    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = "Time: " +  timeLeft;

        if(timeLeft <= 0 || quizEnded == true); {
                clearInterval(timerInterval);
             // Calls enGame function
                endGame();
            }
    }, 1000)
  return;

}

buttonClick = addEventListener("click", startQuizClicked);

// // // quiz function
function qStart() {
    displayQuestion();
}

function displayQuestion() {
    quizContainer = document.querySelector(".quizContainer");
    question.textContent = questions[questionindex].question;
    option1.textContent = questions[questionindex].answers[0];
    option2.textContent = questions[questionindex].answers[1];
    option3.textContent = questions[questionindex].answers[2];
    option4.textContent = questions[questionindex].answers[3];
}


// If answered question incorrectly points are subtracted.
// answer check function
function checkAnswer(answer) {
    var elementBreak = document.getElementById("elementBreak");
    elementBreak.style.display = "block";
    qAnswer.style.display = "block";
}




// Game is over once all questions are answered or timer reaches 0.
// endgame function
// function endGame () {
    
// }



// Enter initials and score once game is over. 
// enter score function
// function enterScore(){

// }





// score chart function
// function displayHighScores() {

// }
   

// addEventlistener() / onclick button function
// buttonClick = addEventListener("click", startQuizClicked);
// option1.addEventListener("click" choose1);
// option2.addEventListener("click" choose2);
// option3.addEventListener("click" choose3);
// option4.addEventListener("click" choose4);

// SubmitEvent.addEventListener("click", function(event) {

// };

