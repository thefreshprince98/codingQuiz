var startButton = document.querySelector("#startQuiz");

var backButton = document.querySelector("#goBack");

var enter = document.querySelector("enterHighScore");
var highScoresText = document.querySelector("#initialsText");

var clearButton = document.querySelector("#clearScores");

var clock = document.getElementById("timer");
// grabbing some dom elements
var one = document.getElementById("main");
var questionSec = document.createElement("section");
var questionContainer = document.getElementById("questions");
var pulledQuestion = document.getElementById("questionTitle");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var feedBack = document.getElementById("feedback");
var highScores = document.getElementById("highScoresList");
// Questions as an array in an object
var myQuestions = [
  {
    question: "A tool to run Java-Script outside of the browser ?",
    choices: ["React", "Node", "N.p.m", "Bootstrap"],
    answer: "Node",
  },
  {
    question:"Which of the following function of String object returns the characters in a string between two indexes into the string?",
   choices: ["split()", "substr()", "substring()", "slice()"],
    answer: "index",
  },
  {
    question: "What do we use to store multiple pieces of data",
    choices: ["returns", "Arguments", "Arrays", "Objects"],
    answer: "Objects" || "arrays",
  },
  {
    question:
      "Which loop is best to use when you need to perform a task for every item in a list, or when the order of things must be maintained?",
    choices: ["For each loop", "While loop", "For loop", "Loop loop"],
    answer: "For each loop",
  },
];

var i = 0;
var wrong = "Wrong!";
var secondsLeft = 40;
var answer = myQuestions[i].answer;

startButton.addEventListener("click", function () {
  startQuiz();
});

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    clock.textContent = secondsLeft;
    if (secondsLeft === 0) {
      window.open("index2.html", "_self");
    }
  }, 1000);
}

function startQuiz() {
  one.setAttribute("class", "container");
  one.append(questionSec);
  questionContainer.removeAttribute("class");
  setTime();
  getQuestion();
}
// looping through stuff
function getQuestion() {
  var currentQuestion = myQuestions[i];
  pulledQuestion.textContent = currentQuestion.question;
  var firstChoice = myQuestions[i];
  choice1.textContent = firstChoice.choices[0];
  var secondChoice = myQuestions[i];
  choice2.textContent = secondChoice.choices[1];
  var thirdChoice = myQuestions[i];
  choice3.textContent = thirdChoice.choices[2];
  var fourthChoice = myQuestions[i];
  choice4.textContent = fourthChoice.choices[3];
}
//  My if statements
choice1.addEventListener("click", function (event) {
  var answer = myQuestions[i].answer;
  if (answer === event.target.textContent) {
    nextQuestion();
  } else {
    showFeedback();
    nextQuestion();
  }
});
choice2.addEventListener("click", function (event) {
  var answer = myQuestions[i].answer;
  if (answer === event.target.textContent) {
    nextQuestion();
  } else {
    showFeedback();
    nextQuestion();
  }
});
choice3.addEventListener("click", function (event) {
  var answer = myQuestions[i].answer;
  if (answer === event.target.textContent) {
    nextQuestion();
  } else {
    showFeedback();
    nextQuestion();
  }
});
choice4.addEventListener("click", function (event) {
  var answer = myQuestions[i].answer;
  if (answer === event.target.textContent) {
    nextQuestion();
  } else {
    showFeedback();
    nextQuestion();
  }
});

function nextQuestion() {
  i++;
  getQuestion();
}

function showFeedback() {
  feedBack.textContent = wrong;
  if (wrong) {
    secondsLeft -= 10;
  }
}

var scores = [];

init();

function renderScores() {
  highScores.innerHTML = "";

  for (var i = 0; i < scores.length; i++) {
    var high = scores[i];

    var li = document.createElement("li");
    li.textContent = high;
    li.setAttribute("data-index", i);

    highScores.appendChild(li);
  }
}

function init() {
  var storedHighScores = JSON.parse(localStorage.getItem("scores"));

  if (storedHighScores !== null) {
    scores = storedHighScores;
  }

  renderScores();
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

enter.addEventListener("submit", function (event) {
  event.preventDefault();
  var scoresText = highScoresText.value.trim();

  if (scoresText === "") {
    return;
  }

  scores.push(scoresText);
  highScoresText.value = "";

  storeScores();
  renderScores();
});
// clear button
clearButton.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("click") === true) {
    var index = element.parentElement.getAttribute("data-index");
    scores.splice(index, 1);

    storeScores();
    renderScores();
  }
});
