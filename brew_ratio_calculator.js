//brew ratio calculator

const grindSizes = {
  pourOver: "medium-fine",
  frenchPress: "coarse",
  aeropress: "medium",
};

const ratios = {
  mild: "18",
  medium: "16",
  strong: "14",
};

const brewTimes = {
  mild: "2-3 minutes",
  medium: "3-4 minutes",
  strong: "4-5 minutes",
};

const waterTemp = {
  light: "93-96°C",
  medium: "90-93°C",
  dark: "85-90°C",
};

const calculateRecipe = function () {
  const method = document.getElementById("method").value;
  let brewImg = document.getElementById("brewImg");
  brewImg.src = `Images/tools/${method}.png`;
  let cups = parseInt(document.getElementById("cups").value);
  if (!cups) {
    cups = 0;
  }
  const strength = document.getElementById("strength").value;
  const roast = document.getElementById("roast").value;
  const waterMl = cups * 240;
  const coffeeGrams = Math.round(waterMl / ratios[strength]);

  document.getElementById("coffee-amount").innerHTML = ` ${coffeeGrams}g`;
  document.getElementById("water-amount").innerHTML = ` ${waterMl}ml`;
  document.getElementById("grind-size").innerHTML = ` ${grindSizes[method]}`;
  document.getElementById("brew-time").innerHTML = ` ${brewTimes[strength]}`;
  document.getElementById("water-temp").innerHTML = ` ${waterTemp[roast]}`;
};

const nodeList = document.querySelectorAll(".input__grid *");

nodeList.forEach(function (node) {
  ["change", "keyup"].forEach(function (e) {
    node.addEventListener(e, () => {
      calculateRecipe();
    });
  });
});

document.addEventListener("load", calculateRecipe());
