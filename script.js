// Global Variables

let startQuizbtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");








// Functions

function startQuiz() {
    alert('I started the game.')
    // Question 1
    let title = document.createElement("h2");
    title.textContent = "Question goes here.";
    questionDiv.appendChild(title);
    // 4 Options
    let btnOne = document.createElement('button');
    btnOne.textContent = "Option 1";
    questionDiv.appendChild(btnOne);
    let btnTwo = document.createElement('button');
    btnTwo.textContent = "Option 2";
    questionDiv.appendChild(btnTwo);
    let btnThree = document.createElement('button');
    btnThree.textContent = "Option 3";
    questionDiv.appendChild(btnThree);
    let btnFour = document.createElement('button');
    btnFour.textContent = "Option 4";
    questionDiv.appendChild(btnFour);
    // Clickability

}








// Function Calls

startQuizbtn.addEventListener('click', startQuiz);



























// CODE FROM NU 4.1.8
// // let body = document.body;
// // let h1El = document.createElement("h1");
// // let infoEl = document.createElement("div");
// // let imgEl = document.createElement("img");
// // let hackersEl = document.createElement("div");
// // let nameEl = document.createElement("div");
// // let favoriteEl = document.createElement("div");

// // Create ordered list element
// let listEl = document.createElement("ol");

// // Create ordered list items
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");

// // h1El.textContent = "Willy B's Code Quiz";
// // hackersEl.textContent = "Hackers Edition";
// // nameEl.textContent = "Cutline in case I need it";
// // favoriteEl.textContent = "Question 1 goes here";

// li1.textContent = 'blah blah';
// li2.textContent = 'bloh bloh';
// li3.textContent = 'bleh bleh';
// li4.textContent = 'blih blih';

// body.appendChild(h1El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(hackersEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list
// listEl.append(li1, li2, li3, li4);


// // h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// // infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// // imgEl.setAttribute("src", "images/BackgroundImage.jpg;", "style", "margin:auto; width:50%; text-align:center;");
// // hackersEl.setAttribute("style", "font-size:25px; text-align:center;");
// // nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// // favoriteEl.setAttribute("style", "font-size:20px;");