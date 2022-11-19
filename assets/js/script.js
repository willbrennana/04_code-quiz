// Global Variables

const welcomePage = document.getElementById("welcome-page");
const btnStart = document.querySelector("#btnStart");

const qstnrPage = document.getElementById("qstnr-page");
const questionDiv = document.querySelector("#questions");

let reactButtons = document.querySelectorAll(".btn-choices");
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnFour = document.getElementById("btn-four");
let checkLine = document.querySelector("#check-line");

let scoreBoard = document.querySelector("#submit-page");
let finalScore = document.querySelector("#final-score");
let userInitial = document.querySelector("#initial");
let submitBtn = document.querySelector("#submit-btn");
let submitPage = document.querySelector("#submit-page");

let ldrbrdPage = document.querySelector("#ldrbrd-page");
let scoreRecord = document.querySelector("#score-record");
let scoreCheck = document.querySelector("#score-check");
let finish = document.querySelector("#finish");

let backBtn = document.querySelector("#back-btn");
let clearBtn = document.querySelector("#clear-btn");

let timer = document.getElementById("timer");
let secondsLeft = 60;
let questionCurrent = 0;
let totalScore = 0;
let questionCount = 1;
let scores = JSON.parse(localStorage.getItem("ScoreList")) || [];

// DEFINE QUESTIONS WITHIN ARRAY OF OBJECTS

let qstnrQuestions = [
  {
    question: "Question 1",
    choices: ["a", "b", "c", "d"],
    answer: "a",
  },
  {
    question: "Question 2",
    choices: ["a", "b", "c", "d"],
    answer: "b",
  },
  {
    question: "Question 3",
    choices: ["a", "b", "c", "d"],
    answer: "c",
  },
  {
    question: "Question 4",
    choices: ["a", "b", "c", "d"],
    answer: "d",
  },
];

// FUNCTIONS TO ASSIGN ACTIONS TO ELEMENTS

//Start a timer
function countdown() {
  let timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = `${secondsLeft} seconds remaining`;

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      timer.textContent = "Time is up!";
      gameOver();
    } else if (questionCount >= qstnrQuestions.length + 1) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

//Start quiz
function startQuiz() {
  welcomePage.style.display = "none";
  qstnrPage.style.display = "block";
  questionCurrent = 0;
  countdown();
  populateQuestions(questionCurrent);
}

//Display questions and answers
function populateQuestions(n) {
  questionDiv.textContent = qstnrQuestions[n].question;
  btnOne.textContent = qstnrQuestions[n].choices[0];
  btnTwo.textContent = qstnrQuestions[n].choices[1];
  btnThree.textContent = qstnrQuestions[n].choices[2];
  btnFour.textContent = qstnrQuestions[n].choices[3];
  questionCurrent = n;
}

//Confirm answer
function checkAnswer(event) {
  event.preventDefault();
  //Display confirmation message
  checkLine.style.display = "block";
  setTimeout(function () {
    checkLine.style.display = "none";
  }, 1000);

  //Answer confirmation message
  if (qstnrQuestions[questionCurrent].answer === event.target.value) {
    checkLine.textContent = "Correct ✅";
    totalScore = totalScore + 1;
  } else {
    checkLine.textContent = "Incorrect 🌱";
    secondsLeft = secondsLeft - 10;
    totalScore = totalScore;
  }

  //Next question
  if (questionCurrent < qstnrQuestions.length - 1) {
    // Pull in next
    populateQuestions(questionCurrent + 1);
  } else {
    gameOver();
  }
  questionCount++;
}

//Game over
function gameOver() {
  scoreBoard.classList.remove("hidden");
  qstnrPage.style.display = "none";
  // Show final score
  finalScore.textContent =
    "Nice work! Your final score is a " + totalScore + "/4.";
  // Clear Interval(timerInterval);
  timer.style.display = "none";
}

//Get current score and initials from local storage
function getScore() {
  let currentList = localStorage.getItem("ScoreList");
  if (currentList !== null) {
    freshList = JSON.parse(currentList);
    return freshList;
  } else {
    freshList = [];
  }
  return freshList;
}

function displayMessage() {
  scoreRecord.textContent =
    "Fresh board. Fresh slate. Play again to make your mark.";
}

//Render score to leaderboard
function renderScore() {
  scoreRecord.innerHTML = "";
  scoreRecord.style.display = "block";
  let highScores = sort();
  // Slice the high score array to only show the top five high scores.
  let topFive = highScores.slice(0, 5);
  for (let i = 0; i < topFive.length; i++) {
    let item = topFive[i];
    // Show the score list on score board
    let li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
    displayMessage();
  }
}

//Sort score within leaderboard
function sort() {
  let unsortedList = getScore();
  if (getScore == null) {
    return;
  } else {
    unsortedList.sort(function (a, b) {
      return b.score - a.score;
    });
    return unsortedList;
  }
}

//Stringify and push score and initials to local storage
function addItem(n) {
  let addedList = getScore();
  addedList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addedList));
}

function saveScore() {
  let scoreItem = {
    user: userInitial.value,
    score: totalScore,
  };
  addItem(scoreItem);
  renderScore();
}

// CALL FUNCTIONS USING EVENT LISTENERS //

// Click to start quiz.

btnStart.addEventListener("click", startQuiz);

// Click to select answer and continue to the next question.

reactButtons.forEach(function (click) {
  click.addEventListener("click", checkAnswer);
});

// Click to save information and proceed to next page.

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  ldrbrdPage.style.display = "none";
  qstnrPage.style.display = "none";
  welcomePage.style.display = "block";
  saveScore();
  location.reload();
});

// Click to submit information and return to welcome page.

// Click to view high scores

scoreCheck.addEventListener("click", function () {
  ldrbrdPage.classList.remove("hidden");
  welcomePage.style.display = "none";
  scores.forEach((score) => {
    scoreRecord.innerHTML += `${score.user}: ${score.score}<br>`;
  });
});

// Click to go back to welcome page

backBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  ldrbrdPage.style.display = "none";
  qstnrPage.style.display = "none";
  welcomePage.style.display = "block";
  location.reload();
});

// CLick to clear local storage and clear page shows
clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  displayMessage();
});
