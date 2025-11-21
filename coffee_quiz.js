const firstQuestion = document.getElementById("firstQuestion");
const secondQuestion = document.getElementById("secondQuestion");
const thirdQuestion = document.getElementById("thirdQuestion");
const fourthQuestion = document.getElementById("fourthQuestion");
const fifthQuestion = document.getElementById("fifthQuestion");

const button = document.getElementById("btn");
const answer = document.getElementById("answer");

const calculateAnswer = function () {
  if (
    firstQuestion.value === "firstOption" &&
    secondQuestion.value === "firstOption" &&
    thirdQuestion.value === "firstOption" &&
    fourthQuestion.value === "firstOption" &&
    fifthQuestion.value === "firstOption"
  ) {
    return "POUR OVER";
  } else return "SOMETHING ELSE";
};

button.addEventListener("click", () => {
  answer.innerHTML = calculateAnswer();
});
