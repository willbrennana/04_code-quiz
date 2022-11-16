// Global Variables
const btnGrid = document.querySelector(".btnGrid");
const startQuizbtn = document.querySelector("#startQuiz");
const questionDiv = document.querySelector("#questions");
let index = 0;
let title = document.querySelector(".question");

// Functions

function startQuiz() {
  alert("I started the game.");

  // Display Question
  //   let title = document.createElement("h2");
  title.textContent = quizQuestions[index].question;
  questionDiv.appendChild(title);

  // 4 Answer Options
  let btnOne = document.createElement("button");
  btnOne.textContent = quizQuestions[index].opt1;
  btnOne.setAttribute("value", quizQuestions[index].opt1);
  btnOne.setAttribute("data-answer", quizQuestions[index].correct);
  //   questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = quizQuestions[index].opt2;
  //   btnTwo.setAttribute("value", quizQuestions[index].opt2);
  //   questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = quizQuestions[index].opt3;
  //   btnThree.setAttribute("value", quizQuestions[index].opt3);
  //   questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = quizQuestions[index].opt4;
  //   btnFour.setAttribute("value", quizQuestions[index].opt4);
  //   questionDiv.appendChild(btnFour);

  btnGrid.append[(btnOne, btnTwo, btnThree, btnFour)];
  questionDiv.append(btnGrid);

  // Clickability with Event listener

  btnGrid.addEventListener("click", (event) => {
    let btnClick = event.target.value;
    console.log(btnClick);
  });
}

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

// Function Calls

startQuizbtn.addEventListener("click", startQuiz);
