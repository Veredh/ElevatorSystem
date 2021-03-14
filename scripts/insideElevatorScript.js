"use strict";

let btnClicked = false;
let changeFloor = false;

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

  let btnOne = document.getElementById("one");
  let btnTwo = document.getElementById("two");
  let btnThree = document.getElementById("three");
  let btnFour = document.getElementById("four");
  let btnFive = document.getElementById("five");
  let btnSix = document.getElementById("six");
  let btnSeven = document.getElementById("seven");

  btnOne.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(1);
    }
  });
  btnTwo.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(2);
    }
  });
  btnThree.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(3);
    }
  });
  btnFour.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(4);
    }
  });
  btnFive.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(5);
    }
  });
  btnSix.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(6);
    }
  });
  btnSeven.addEventListener("click", function () {
    changeBackground(this);
    if (changeFloor) {
      changeElevatorFloor(7);
    }
  });
});

function manageBtnSelection(btn, btnNumber) {
  changeBackground(btn);
  if (changeFloor) {
    changeElevatorFloor(btnNumber);
  }
}

function changeBackground(btn) {
  if (!btnClicked) {
    btn.style.borderColor = "green";
    btnClicked = true;
    changeFloor = true;
  }
}

function changeElevatorFloor(floor) {
  if (firstElevatorCalled) {
    firstElevatorFloor = floor;
  } else if (secondElevatorCalled) {
    secondElevatorFloor = floor;
  } else {
    throw "No elevator called";
  }

  currentFloor = floor;
  elevatorETA(floor);
}

function elevatorETA(timeToAddToETA) {
  var countdownDate = new Date();
  countdownDate.setSeconds(countdownDate.getSeconds() + timeToAddToETA);
  countdownDate = countdownDate.getTime();

  var x = setInterval(function () {
    var currentDate = new Date().getTime();
    var distance = countdownDate - currentDate;

    if (distance <= 0) {
      openElevatorOnNewFloor();
    }
  }, 1000);
}

function openElevatorOnNewFloor() {}
