const coffeeQuiz = document.getElementById("coffeeQuiz");
const coffeeQuizChildren = [...coffeeQuiz.children].slice(1, 6);
//array met alle children van de coffeeQuiz section
const rushQ = document.getElementById("rushQ");
const rushYes = document.getElementById("rushYes");
const rushNo = document.getElementById("rushNo");
const milkyQ = document.getElementById("milkyQ");
const milkYes = document.getElementById("milkYes");
const milkNo = document.getElementById("milkNo");
const filterBodyQ = document.getElementById("filterBodyQ");
const filterLight = document.getElementById("filterLight");
const filterHeavy = document.getElementById("filterHeavy");
const drinkSizeQ = document.getElementById("drinkSizeQ");
const fullCup = document.getElementById("fullCup");
const tinySip = document.getElementById("tinySip");
const fastBodyQ = document.getElementById("fastBodyQ");
const fastMedium = document.getElementById("fastMedium");
const fastHeavy = document.getElementById("fastHeavy");
const restartBtn = document.getElementById("restartBtn");
const answerDiv = document.getElementById("answerDiv");

//function uses string parameter to display answer with correct brewmethod:

function showAnswer(brewmethod) {
  document.getElementById(
    "answer"
  ).innerHTML = `Your brewmethod is: ${brewmethod}!`;
  answerDiv.style.display = "block";
}

//function restarts quiz so answer gets removed and first question shows:

function clearInputs() {
  document.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
}

restartBtn.addEventListener("click", () => {
  clearInputs();
  answerDiv.style.display = "none";
  coffeeQuizChildren.forEach((child) => {
    child.style.display = "none";
  });
  rushQ.style.display = "block";
});

//function uses click event listeners to hide and show questions or display answers,
//depending on user input:

function quizFlow() {
  coffeeQuizChildren.forEach((child) => {
    child.addEventListener("click", (e) => {
      e.currentTarget.style.display = "none";
      switch (true) {
        case rushYes.checked:
          milkyQ.style.display = "block";
          break;
        case rushNo.checked:
          filterBodyQ.style.display = "block";
          break;
        case fullCup.checked:
          fastBodyQ.style.display = "block";
          break;
        case milkNo.checked:
          fastBodyQ.style.display = "block";
          break;
        case filterLight.checked:
          showAnswer("pour over");
          break;
        case filterHeavy.checked:
          showAnswer("french press");
          break;
        case milkYes.checked:
          showAnswer("espresso");
          break;
        case tinySip.checked:
          showAnswer("espresso");
          break;
        case fastMedium.checked:
          showAnswer("aeropress");
          break;
        case fastHeavy.checked:
          showAnswer("long black");
          break;
      }
    });
  });
}
//execute quizFlow() function when document loads

document.addEventListener("load", quizFlow());
