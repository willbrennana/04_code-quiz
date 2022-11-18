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
var finalScore = document.querySelector("#final-score");
let userInitial = document.querySelector("#initial");
let submitBtn = document.querySelector("#submit-btn");

let ldrbrdPage = document.querySelector("#ldrbrd-page");
let scoreRecord = document.querySelector("#score-record");
let scoreCheck = document.querySelector("#score-check");
let finish = document.querySelector("#finish");

let backBtn = document.querySelector("#back-btn");
let clearBtn = document.querySelector("#clear-btn");

let timeLeft = document.getElementById("timer");
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

//Start quiz
function startQuiz() {
  welcomePage.style.display = "none";
  qstnrPage.style.display = "block";
  questionCurrent = 0;
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
    secondsLeft = secondsLeft - 10;
    checkLine.textContent = "Incorrect 🌱";
    totalScore = totalScore;
  }
  //Next question
  if (questionCurrent < qstnrQuestions.length - 1) {
    // Call populateQuestions to bring in next question when any reactBtn is clicked
    populateQuestions(questionCurrent + 1);
  } else {
    gameOver();
  }
  questionCount++;
}

//Game over
function gameOver() {
  qstnrPage.style.display = "none";
  scoreBoard.style.display = "block";
  console.log(scoreBoard);
  // show final score
  finalScore.textContent = "Your final score is :" + totalScore;
  // clearInterval(timerInterval);
  timeLeft.style.display = "none";
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

//Render score to leaderboard
function renderScore() {
  scoreRecord.innerHTML = "";
  scoreRecord.style.display = "block";
  var highScores = sort();
  // Slice the high score array to only show the top five high scores.
  var topFive = highScores.slice(0, 5);
  for (var i = 0; i < topFive.length; i++) {
    var item = topFive[i];
    // Show the score list on score board
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
  }
}

//Sort score within leaderboard
function sort() {
  var unsortedList = getScore();
  if (getScore == null) {
    return;
  } else {
    unsortedList.sort(function (a, b) {
      return b.score - a.score;
    });
    return unsortedList;
  }
}

//Push score and initials to local storage
function addItem(n) {
  var addedList = getScore();
  addedList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addedList));
}

function saveScore() {
  var scoreItem = {
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
  welcomePage.style.display = "none";
  ldrbrdPage.style.display = "none";
  qstnrPage.style.display = "block";
  saveScore();
});

// Check high score

scoreCheck.addEventListener("click", function () {
  scores.forEach((score) => {
    scoreRecord.innerHTML += `${score.user}: ${score.score}<br>`;
  });
});

// REPOSITORY //

// const btnGrid = document.querySelector(".btnGrid");
// const btnNext = document.querySelector("#btnNext");

// const gameoverPage = document.getElementById("gameover-page");

// const ldrbrdPage = document.getElementById("ldrbrd-page");

// let index = 0;
// let title = document.querySelector(".question");

// let score = 0;
// let highscore = localStorage.getItem("highscore");
// let currentQuestion = 0;

// let scores = JSON.parse(localStorage.getItem("scores")) || [];

// questionDiv.addEventListener("click", function (event) {
//   let choice = event.target.innerHTML;
//   let answer = event.target.dataset.answer;

//   if (choice === answer) {
//     alert("correct");
//     questionsIndex++;
//     if (questionsIndex > questions.length - 1) {
//       endGame();
//     } else {
//       createButton(questionsIndex);
//     }
//     localStorage.setItem("correct answer", choice);
//   } else {
//     alert("incorrect");
//     localStorage.setItem("incorrect answer", choice);
//   }
// });

// btnNext.addEventListener("click", function () {
//   removeHiddenAndHighlight();
//   currentQuestion++;
//   updateValues();
// });

// btnNext.addEventListener("click", function () {
//   if (currentQuestion === 4) {
//     btnNext.classList.add("hidden");
//     btnFinish.classList.remove("hidden");
//   }
// });

// function updateValues() {
//   currentQuestion.textContent = questions[currentQuestion].question;
//   choice1;
// }

//   // Display Question
//   //   let title = document.createElement("h2");
//   title.textContent = quizQuestions[index].question;
//   questionDiv.appendChild(title);

//   // 4 Answer Options
//   let btnOne = document.createElement("button");
//   btnOne.textContent = quizQuestions[index].opt1;
//   btnOne.setAttribute("value", quizQuestions[index].opt1);
//   btnOne.setAttribute("data-answer", quizQuestions[index].correct);
//   //   questionDiv.appendChild(btnOne);

//   let btnTwo = document.createElement("button");
//   btnTwo.textContent = quizQuestions[index].opt2;
//   //   btnTwo.setAttribute("value", quizQuestions[index].opt2);
//   //   questionDiv.appendChild(btnTwo);

//   let btnThree = document.createElement("button");
//   btnThree.textContent = quizQuestions[index].opt3;
//   //   btnThree.setAttribute("value", quizQuestions[index].opt3);
//   //   questionDiv.appendChild(btnThree);

//   let btnFour = document.createElement("button");
//   btnFour.textContent = quizQuestions[index].opt4;
//   //   btnFour.setAttribute("value", quizQuestions[index].opt4);
//   //   questionDiv.appendChild(btnFour);

//   btnGrid.append[(btnOne, btnTwo, btnThree, btnFour)];
//   questionDiv.append(btnGrid);

//   // Clickability with Event listener

//   btnGrid.addEventListener("click", (event) => {
//     let btnClick = event.target.value;
//     console.log(btnClick);
//   });

// function createQuestion(index) {
//   let title = document.createElement("h2");
//   title.textContent = questions[index].title;
//   questionDiv.appendChild(title);
//   questions[index].choices.forEach((choice) => {
//     let buttonOne = document.createElement("button");
//     buttonOne.textContent = choice;
//     buttonOne.dataset.answer = questions[index].answer;
//     questionDiv.appendChild(buttonOne);
//   });
// }

// function createButton(index) {}

// function endGame() {
//   let heading = document.createElement("h1");
//   heading.innerHTML = "Game Over";
//   questionDiv.appendChild(heading);
//   console.log(time);
//   score = time;
//   clearInterval(time);
//   console.log(score);
// }
