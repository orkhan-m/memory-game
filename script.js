"use strict";

const newGame = document.querySelector(".new-game-btn");
const playground = document.querySelector(".playground");
let circle = document.querySelectorAll(".circle");

let difficulty = 1;
const selectDifficulty = function () {
  difficulty = Number(
    prompt("Select Difficulty: 1 - easy, 2 - medium, 3 - difficult")
  );
  return difficulty;
};

newGame.addEventListener("click", function () {
  // selectDifficulty();
  selectDifficulty();

  if (difficulty === 1) {
    circle.forEach((el) => el.remove());

    playground.style.gridTemplateColumns = "10rem 10rem";
    playground.style.gridTemplateRows = "10rem 10rem";

    for (let i = 0; i < 4; i++) {
      playground.insertAdjacentHTML(
        "beforeend",
        `<div class=circle circle-${i + 1}></div>`
      );
    }

    circle = document.querySelectorAll(".circle");
  }

  if (difficulty === 2) {
    circle.forEach((el) => el.remove());

    playground.style.gridTemplateColumns = "10rem 10rem 10rem 10rem";
    playground.style.gridTemplateRows = "10rem 10rem 10rem 10rem";

    for (let i = 0; i < 16; i++) {
      playground.insertAdjacentHTML(
        "beforeend",
        `<div class=circle circle-${i + 1}></div>`
      );
    }

    circle = document.querySelectorAll(".circle");
  }

  if (difficulty === 3) {
    console.log(difficulty);
    circle.forEach((el) => el.remove());

    playground.style.gridTemplateColumns =
      "10rem 10rem 10rem 10rem 10rem 10rem";
    playground.style.gridTemplateRows = "10rem 10rem 10rem 10rem 10rem 10rem";

    for (let i = 0; i < 36; i++) {
      playground.insertAdjacentHTML(
        "beforeend",
        `<div class="circle circle-${i + 1}"></div>`
      );
    }

    circle = document.querySelectorAll(".circle");
  }
});
