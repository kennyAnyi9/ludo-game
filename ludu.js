"use strict";

// let test = document.querySelector(".R-A1");
// let test2 = document.querySelector(".R-A-token1");
// test.addEventListener("click", function () {
//   test2.classList.add("hidden");
// });

// let test3 = document.querySelector(".Y-A-token1");
// let test4 = document.querySelector(".R-A-token1");
// test3.addEventListener("click", function () {
//   test3.classList.add("hidden");
//   test4.classList.remove("hidden");
// });

// add query selectors

let play = document.querySelector(".start");
let dice1 = document.querySelector(".one");
let dice2 = document.querySelector(".two");
let dice3 = document.querySelector(".three");
let dice4 = document.querySelector(".four");
let dice5 = document.querySelector(".five");
let dice6 = document.querySelector(".six");
let btn1 = document.querySelector(".btn1");
let progress1 = document.querySelector(".progress1");
let percentage1 = document.querySelector(".percentage1");
let btn2 = document.querySelector(".btn2");
let progress2 = document.querySelector(".progress2");
let percentage2 = document.querySelector(".percentage2");
let btn3 = document.querySelector(".btn3");
let progress3 = document.querySelector(".progress3");
let percentage3 = document.querySelector(".percentage3");
let btn4 = document.querySelector(".btn4");
let progress4 = document.querySelector(".progress4");
let percentage4 = document.querySelector(".percentage4");
let playerR1 = document.querySelector(".R-P1");
let playerR2 = document.querySelector(".R-P2");
let playerR3 = document.querySelector(".R-P3");
let playerR4 = document.querySelector(".R-P4");
let playerG1 = document.querySelector(".G-P1");
let playerG2 = document.querySelector(".G-P2");
let playerG3 = document.querySelector(".G-P3");
let playerG4 = document.querySelector(".G-P4");
let playerY1 = document.querySelector(".Y-P1");
let playerY2 = document.querySelector(".Y-P2");
let playerY3 = document.querySelector(".Y-P3");
let playerY4 = document.querySelector(".Y-P4");
let playerB1 = document.querySelector(".Y-P1");
let playerB2 = document.querySelector(".Y-P2");
let playerB3 = document.querySelector(".Y-P3");
let playerB4 = document.querySelector(".Y-P4");
let dice;

//  function to generate random number
const randomNumber = function () {
  let rand = Math.trunc(Math.random() * 6) + 1;
  if (rand === 1) {
    dice = "1";
    dice1.classList.remove("hidden");
  } else if (rand === 2) {
    dice = "2";
    dice2.classList.remove("hidden");
  } else if (rand === 3) {
    dice = "3";
    dice3.classList.remove("hidden");
  } else if (rand === 4) {
    dice = "4";
    dice4.classList.remove("hidden");
  } else if (rand === 5) {
    dice = "5";
    dice5.classList.remove("hidden");
  } else {
    dice = "6";
    dice6.classList.remove("hidden");
  }
};

// function that hides the first dice displayed when user clicks 'play'
const randomNumber1 = function (dice) {
  if (dice === "1") {
    dice1.classList.add("hidden");
  } else if (dice === "2") {
    dice2.classList.add("hidden");
  } else if (dice === "3") {
    dice3.classList.add("hidden");
  } else if (dice === "4") {
    dice4.classList.add("hidden");
  } else if (dice === "5") {
    dice5.classList.add("hidden");
  } else dice6.classList.add("hidden");
};

//event listener to start game
play.addEventListener("click", function () {
  play.classList.add("hidden");
  progress1.classList.add("hidden");
  percentage1.classList.add("hidden");
  btn1.classList.remove("hidden");
  randomNumber();
});

// activate player 1 and switch to player2
btn1.addEventListener("click", function () {
  randomNumber1(dice);
  randomNumber();

  if (dice === "6") {
    playerR1.addEventListener("click", function () {
      playerR1.style.borderColor = "white";
      document.querySelector(` .R-A${2}-tokenR`).classList.remove("hidden");
    });
  } else {
    progress1.classList.remove("hidden");
    percentage1.classList.remove("hidden");
    btn1.classList.add("hidden");

    progress2.classList.add("hidden");
    percentage2.classList.add("hidden");
    btn2.classList.remove("hidden");
  }
});

//activating player 3

btn2.addEventListener("click", function () {
  randomNumber1(dice);
  randomNumber();

  if (dice === "6") {
    playerG1.addEventListener("click", function () {
      playerG1.style.borderColor = "white";
      document.querySelector(" .G-A2-tokenG").classList.remove("hidden");
    });
  } else {
    progress2.classList.remove("hidden");
    percentage2.classList.remove("hidden");
    btn2.classList.add("hidden");

    progress3.classList.add("hidden");
    percentage3.classList.add("hidden");
    btn3.classList.remove("hidden");
  }
});

//activating player 4

btn3.addEventListener("click", function () {
  randomNumber1(dice);
  randomNumber();

  if (dice === "6") {
    playerY1.addEventListener("click", function () {
      playerY1.style.borderColor = "white";
      document.querySelector(" .Y-A2-tokenY").classList.remove("hidden");
    });
  } else {
    progress3.classList.remove("hidden");
    percentage3.classList.remove("hidden");
    btn3.classList.add("hidden");

    progress4.classList.add("hidden");
    percentage4.classList.add("hidden");
    btn4.classList.remove("hidden");
  }
});

//activating player one again for the cycle to repeat

btn4.addEventListener("click", function () {
  randomNumber1(dice);
  randomNumber();

  if (dice === "6") {
    playerB1.addEventListener("click", function () {
      playerB1.style.borderColor = "white";
      document.querySelector(` .Y-A ${2} -tokenY`).classList.remove("hidden");
    });
  } else {
    progress4.classList.remove("hidden");
    percentage4.classList.remove("hidden");
    btn4.classList.add("hidden");

    progress1.classList.add("hidden");
    percentage1.classList.add("hidden");
    btn1.classList.remove("hidden");
  }
});
