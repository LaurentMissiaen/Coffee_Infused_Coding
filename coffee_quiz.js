const coffeeQuiz = document.getElementById("coffeeQuiz");
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

//function uses string parameter to display answer with correct brewmethod:

function showAnswer(brewmethod) {
  document.getElementById(
    "answer"
  ).innerHTML = `Your brewmethod is: ${brewmethod}!`;
  document.getElementById("answerDiv").style.display = "block";
}

//function restarts quiz so answer gets removed and first question shows:

restartBtn.addEventListener("click", () => {
  document.getElementById("answerDiv").style.display = "none";
  document.getElementById("rushQ").style.display = "block";
});

//function uses click event listeners to hide and show questions or display answers,
//depending on user input:

function quizFlow() {
  rushQ.addEventListener("click", () => {
    if (rushYes.checked === true) {
      rushQ.style.display = "none";
      milkyQ.style.display = "block";
    } else if (rushNo.checked === true) {
      rushQ.style.display = "none";
      filterBodyQ.style.display = "block";
    }
  });
  filterBodyQ.addEventListener("click", () => {
    if (filterLight.checked === true) {
      filterBodyQ.style.display = "none";
      showAnswer("pour over");
    } else if (filterHeavy.checked === true) {
      filterBodyQ.style.display = "none";
      showAnswer("french press");
    }
  });
  milkyQ.addEventListener("click", () => {
    if (milkYes.checked === true) {
      milkyQ.style.display = "none";
      showAnswer("espresso");
    } else if (milkNo.checked === true) {
      milkyQ.style.display = "none";
      drinkSizeQ.style.display = "block";
    }
  });
  drinkSizeQ.addEventListener("click", () => {
    if (fullCup.checked === true) {
      drinkSizeQ.style.display = "none";
      fastBodyQ.style.display = "block";
    } else if (tinySip.checked === true) {
      drinkSizeQ.style.display = "none";
      showAnswer("espresso");
    }
  });
  fastBodyQ.addEventListener("click", () => {
    if (fastMedium.checked === true) {
      fastBodyQ.style.display = "none";
      showAnswer("aeropress");
    } else if (fastHeavy.checked === true) {
      fastBodyQ.style.display = "none";
      showAnswer("long black");
    }
  });
}

//execute quizFlow() function when document loads

document.addEventListener("load", quizFlow());
