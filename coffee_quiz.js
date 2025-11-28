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
const rushBody = document.getElementById("rushBody");
const mediumBody = document.getElementById("mediumBody");
const heavyBody = document.getElementById("heavyBody");
const restartBtn = document.getElementById("restartBtn");

function answerDiv(brewmethod) {
  let div = document.createElement("div");
  div.setAttribute("id", "answerDiv");
  let content = document.createElement("p");
  content.innerHTML = `Your brewmethod is: ${brewmethod}!`;
  div.appendChild(content);
  coffeeQuiz.appendChild(div);
}

function deleteAnswer() {
  coffeeQuiz.removeChild("answerDiv");
}

restartBtn.addEventListener("click", () => {
  rushQ.style.display = "block";
});

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
      answerDiv("pour over");
    } else if (filterHeavy.checked === true) {
      filterBodyQ.style.display = "none";
      answerDiv("french press");
    }
  });
  milkyQ.addEventListener("click", () => {
    if (milkYes.checked === true) {
      milkyQ.style.display = "none";
      answerDiv("espresso");
    } else if (milkNo.checked === true) {
      milkyQ.style.display = "none";
      drinkSizeQ.style.display = "block";
    }
  });
  drinkSizeQ.addEventListener("click", () => {
    if (fullCup.checked === true) {
      drinkSizeQ.style.display = "none";
      rushBody.style.display = "block";
    } else if (tinySip.checked === true) {
      drinkSizeQ.style.display = "none";
      answerDiv("espresso");
    }
  });
  rushBody.addEventListener("click", () => {
    if (mediumBody.checked === true) {
      rushBody.style.display = "none";
      answerDiv("aeropress");
    } else if (heavyBody.checked === true) {
      rushBody.style.display = "none";
      answerDiv("long black");
    }
  });
  deleteAnswer();
}

document.onload(quizFlow());
