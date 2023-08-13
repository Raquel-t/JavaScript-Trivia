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

// Questions!!
const questions = [
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
            { text: "It is an ordered list of values", correct: true },
            { text: "It is an ordered list of objects", correct: false }, 
            { text: "It is an ordered list of strings", correct: false },
            { text: "It is an ordered list of functions", correct: false },
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "//This is a comment", correct: true },
            { text: "`This is a comment", correct: false },
            { text: "<!--This is a Comment-->", correct: false },
            { text: "This is a comment", correct: false },
        ] 
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "myFunction()", correct: true },
            { text: "function:myfunction()", correct: false },
            { text: "function myFunction()", correct: false },
        ]    
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "rnd(7.25)", correct: false },
            { text: "Math.rnd(7.25)", correct: false },
            { text: "round(7.25)", correct: false },
            { text: "Math.round(7.25)", correct: true },
        ]    
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "v carName;", correct: false },
            { text: "variable carName;", correct: false },
            { text: "var carName;", correct: true },
            { text: "var carname;", correct: false },
        ]    
    },
    {
        question: "What is the correct place to insert a JavaScript?",
        answers: [
            { text: "The <body> section", correct: false },
            { text: "The <head> section", correct: false },
            { text: "Both the <head> and the <body> section are correct", correct: true },
            { text: "The <footer> section", correct: false },
        ]    
    }
];

const questionElement = document.getElementById("question");
const timerDisplay = document.getElementById("timerDisplay");

// Part 1 of HTML
var starter = document.querySelector(".starter");
var buttonClick = document.getElementById("startQuiz");

// Part 2 of HTML
var quizContainer = document.getElementById("quizContainer");
var question = document.getElementById("question");
var option1 = document.getElementById("ch1");
var option2 = document.getElementById("ch2");
var option3 = document.getElementById("ch3");
var option4 = document.getElementById("ch4");
var elementBreak = document.getElementById("elementBreak");
var qAnswer = document.getElementById("qAnswer");

// Part 3 of HTML
var end = document.querySelector(".end");
var timeUp = document.getElementById("timeUp");
var endScore = document.getElementById("endScore");
var initialBar = document.getElementById("initialBar");
var initialButton = document.getElementById("initialButton");

var scoreScreen = document.querySelector(".scoreScreen");
var scoreChart = document.getElementById("scoreChart");
var goBack = document.getElementById("goBack");
var clearH = document.getElementById("clearH");
var viewHighScore = document.getElementById("viewHighScore");

let questionIndex = 0;
var quizTime = 60;
var scoreResult = 0;
var timeLeft = quizTime;
let highScores = localStorage.getItem("highscores") ? JSON.parse(localStorage.getItem("highscores")) : []
let quizEnded = false;

// Quiz timer function
function qTimer() {
    console.log("Quiz timer started");


    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0 || quizEnded) {
            clearInterval(timerInterval);
            // Call endGame function
            endGame();
        }
    }, 1000);
}


// Quiz function
function qStart() {
    qTimer()
    console.log("Quiz started");
    displayQuestion();
    quizContainer.style.display = "block";
    starter.style.display = "none";
    end.style.display = "none";
    scoreScreen.style.display = "none";
    elementBreak.style.display = "none";
    qAnswer.style.display = "none";
}

function displayQuestion() {
    questionElement.textContent = questions[questionIndex].question;
    option1.textContent = questions[questionIndex].answers[0].text;
    option1.value = questions[questionIndex].answers[0].text;
    option2.textContent = questions[questionIndex].answers[1].text;
    option2.value = questions[questionIndex].answers[1].text;
    option3.textContent = questions[questionIndex].answers[2].text;
    option3.value = questions[questionIndex].answers[2].text;
    option4.textContent = questions[questionIndex].answers[3].text;
    option4.value = questions[questionIndex].answers[3].text;
}

// Answer check function
function checkAnswer(answer) {
    console.log("Checking answer:", answer);
    
    if (answer === questions[questionIndex].answers.find(a => a.correct).text) {
        scoreResult += 10;  
    } else {
        timeLeft -= 10;   
        timerDisplay.textContent = "Time: " + timeLeft; 
        elementBreak.style.display = "block";
        qAnswer.style.display = "block";
        qAnswer.textContent = "Correct Answer: " + questions[questionIndex].answers.find(a => a.correct).text;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// End game function
function endGame() {
    console.log("Quiz ended");
    quizEnded = true;
    quizContainer.style.display = "none";
    end.style.display = "block";
    timeUp.textContent = "Time's Up!";
    endScore.textContent = "Your score: " + scoreResult;
}



function displayHighScores() {
    scoreChart.innerHTML = "";
    highScores.forEach(function(score) {
        console.log(score)
        var li = document.createElement("li");
        li.textContent = score;
        scoreChart.append(li);
        scoreScreen.style.display = "block";
    });
}

function resetGame() {
    quizEnded = false;
    questionIndex = 0;
    quizTime = 60;
    scoreResult = 0;
    timeLeft = quizTime;
    timerDisplay.textContent = "Time: " + timeLeft;
    initialBar.value = "";
}

// Event listeners
buttonClick.addEventListener("click", qStart);

goBack.addEventListener("click", function() {
    starter.style.display = "block";
    scoreScreen.style.display = "none";
});

clearH.addEventListener("click", function() {
    scoreChart.innerHTML = "";
    highScores = [];
    localStorage.removeItem("highscores");
});

viewHighScore.addEventListener("click", function() {
    starter.style.display = "none";
    scoreScreen.style.display = "block";
});

initialButton.addEventListener("click", function() {
    var initials = document.querySelector("#initialBar").value;
    var scoreEntry = initials + " - " + scoreResult;
    highScores.push(scoreEntry);
    localStorage.setItem("highscores", JSON.stringify(highScores))
    displayHighScores();
});

// reset event listener
goBack.addEventListener("click", function() {
    resetGame();
    starter.style.display = "block";
    scoreScreen.style.display = "none";
    end.style.display = "none"; 
});

// Eventlistener to each answer button
const options = [option1, option2, option3, option4];
options.forEach(option => {
    option.addEventListener("click", function() {
        checkAnswer(option.textContent);
    });
});