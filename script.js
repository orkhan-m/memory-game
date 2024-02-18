"use strict";

const newGame = document.querySelector(".new-game-btn");
const playground = document.querySelector(".playground");
const circle = document.querySelectorAll(".circle");

let difficulty = 1;
const selectDifficulty = function () {
  let difficulty = prompt(
    "Select Difficulty: 1 - easy, 2 - medium, 3 - difficult"
  );
  return difficulty;
};

newGame.addEventListener("click", function () {
  // selectDifficulty();
  console.log(selectDifficulty());
  console.log(difficulty);

  if (difficulty === 1) {
    circle.forEach((el) => el.remove());
  }

  if (difficulty === 2) {
    circle.forEach((el) => el.remove());
  }

  if (difficulty === 3) {
    circle.forEach((el) => el.remove());
  }
});
