"use strict";

window.addEventListener("load", () => {
  let ele = document.getElementById("bg_img");
  ele.src = "../images/insideAnElevator2.jpg";
  ele.addEventListener("load", function () {
    document.getElementById("one").classList.add("btn");
    document.getElementById("one").classList.add("one");
    document.getElementById("one").classList.remove("hidden");
    document.getElementById("two").classList.add("btn");
    document.getElementById("two").classList.add("two");
    document.getElementById("two").classList.remove("hidden");
    document.getElementById("three").classList.add("btn");
    document.getElementById("three").classList.add("three");
    document.getElementById("three").classList.remove("hidden");
    document.getElementById("four").classList.add("btn");
    document.getElementById("four").classList.add("four");
    document.getElementById("four").classList.remove("hidden");
    document.getElementById("five").classList.add("btn");
    document.getElementById("five").classList.add("five");
    document.getElementById("five").classList.remove("hidden");
    document.getElementById("six").classList.add("btn");
    document.getElementById("six").classList.add("six");
    document.getElementById("six").classList.remove("hidden");
    document.getElementById("seven").classList.add("btn");
    document.getElementById("seven").classList.add("seven");
    document.getElementById("seven").classList.remove("hidden");
  });

  let btnOne = document
    .getElementById("one")
    .addEventListener("click", firstFloor());
  let btnTwo = document
    .getElementById("two")
    .addEventListener("click", secondFloor());
  let btnThree = document
    .getElementById("three")
    .addEventListener("click", thirdFloor());
  let btnFour = document
    .getElementById("four")
    .addEventListener("click", fourthFloor());
  let btnFive = document
    .getElementById("five")
    .addEventListener("click", fifthFloor());
  let btnSix = document
    .getElementById("six")
    .addEventListener("click", sixthFloor());
  let btnSeven = document
    .getElementById("seven")
    .addEventListener("click", seventhFloor());
});

function firstFloor() {}

function secondFloor() {}

function thirdFloor() {}

function fourthFloor() {}

function fifthFloor() {}

function sixthFloor() {}

function seventhFloor() {}
