// Funzione CardCreator

function cardCreator(stamphtml, icon, arrayShuffle, i) {
  let card = document.createElement("div");
  card.className = "cards d-flex justify-content-center align-items-center";
  stamphtml.append(card);
  card.addEventListener("click", function () {
    icon.classList.toggle("hide");
    this.classList.toggle("card-change");
    comparisonArray.push(arrayShuffle[i]);
    console.log(comparisonArray);
  });
  return card;
}

function shuffle(arrayToShuffle) {
  let currentIndex = arrayToShuffle.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arrayToShuffle[currentIndex];
    arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
    arrayToShuffle[randomIndex] = temporaryValue;
  }
  return arrayToShuffle;
}

function newGame(arrayShuffle, iconList, cardGameCreator, outputHtml) {
  outputHtml.innerHTML = "";
  counterToEmpty = 0;
  for (let i = 0; i < arrayShuffle.length; i++) {
    iconList = document.createElement("div");
    iconList.append(arrayShuffle[i]);
    iconList.classList.add("hide");
    cardGameCreator(outputHtml, iconList, arrayShuffle, i).append(iconList);
  }
}

// --------------------------------------------------

const hookHtml = document.querySelector(".hook");

const buttonJs = document.getElementById("button-js");

const arrayIcon = [
  "👽",
  "🧟‍♂️",
  "💀",
  "👻",
  "👹",
  "🤖",
  "👹",
  "🧟‍♂️",
  "👽",
  "🤖",
  "💀",
  "👻",
];

let divIcon = "";

let counter = 0;

let comparisonArray = [];

buttonJs.addEventListener("click", function () {
  let arrayMixed = shuffle(arrayIcon);
  newGame(arrayMixed, divIcon, cardCreator, hookHtml);
});
