"use strict";

let elevatorSound;
let floor = document.getElementById("box");
let elevatorButtonCliked,
  curFloor,
  firstFree,
  secondFree,
  firstFloor,
  secondFloor,
  firstCalled,
  secondCalled,
  timeToAddToETA;

window.addEventListener("load", () => {
  let bgImage = document.getElementById("bg_img");
  let callElevatorButton = document.getElementById("callElevatorBtn");

  bgImage.src = "../images/TwoElevators2.jpg";
  bgImage.addEventListener("load", function () {
    document.getElementById("box").classList.add("floor");
    document.getElementById("box").classList.remove("hidden");
    document.getElementById("elevatorText").classList.add("text");
    document.getElementById("elevatorText").classList.remove("hidden");
    document.getElementById("callElevatorBtn").classList.add("btn");
    document.getElementById("callElevatorBtn").classList.remove("hidden");
    document.getElementById("countdownClock").classList.add("time");
    document.getElementById("countdownClock").classList.remove("hidden");
    document
      .getElementById("firstElevatorFloor")
      .classList.add("firstElevator");
    document.getElementById("firstElevatorFloor").classList.remove("hidden");
    document
      .getElementById("secondElevatorFloor")
      .classList.add("secondElevator");
    document.getElementById("secondElevatorFloor").classList.remove("hidden");
  });

  const init = function () {
    if (typeof getExecute() == "object") {
      setCallElevatorButtonClickedValue(false);
      setFirstElevatorFreeValue(true);
      setSecondElevatorFreeValue(true);
      setFirstElevatorFloorValue(1);
      setSecondElevatorFloorValue(1);
      setElevatorCountdownTimeValue(0);
      setFirstElevatorCalledValue(false);
      setSecondElevatorCalledValue(false);
      setCurrentFloorValue(1);
      setExecute(false);
    }

    floor.innerHTML = "Floor " + getCurrentFloorValue();
  };
  init();

  callElevatorButton.addEventListener("click", function () {
    setCallElevatorButtonClickedValue(true);
    changeButtonBackground();
    getFirstElevatorFreeValue() == "false"
      ? (firstFree = false)
      : (firstFree = true);
    getSecondElevatorFreeValue() == "false"
      ? (secondFree = false)
      : (secondFree = true);
    firstFloor = Number(getFirstElevatorFloorValue());
    secondFloor = Number(getSecondElevatorFloorValue());

    if (firstFree && secondFree) {
      if (firstFloor <= secondFloor) {
        callFirstElevator();
      } else {
        callSecondElevator();
      }
    } else if (secondFree) {
      callSecondElevator();
    } else if (firstFree) {
      callFirstElevator();
    } else {
      setTimeout(() => {}, 2000);
    }
  });

  function changeButtonBackground() {
    callElevatorButton.style.background = "red";
  }

  function callFirstElevator() {
    setFirstElevatorFreeValue(false);
    callElevator(true);
  }

  function callSecondElevator() {
    setSecondElevatorFreeValue(false);
    callElevator(false);
  }

  function callElevator(isFirstElevatorCalled) {
    if (isFirstElevatorCalled) {
      firstFloor < 5 ? (timeToAddToETA = firstFloor + 3) : (timeToAddToETA = 7);
    } else {
      secondFloor < 5
        ? (timeToAddToETA = secondFloor + 3)
        : (timeToAddToETA = 7);
    }

    countdownETA(isFirstElevatorCalled);
  }

  function countdownETA(isFirstElevatorCalled) {
    var countdownClock = document.getElementById("countdownClock");
    var countdownDate = new Date();
    countdownDate.setSeconds(countdownDate.getSeconds() + timeToAddToETA);
    countdownDate = countdownDate.getTime();

    var x = setInterval(function () {
      var currentDate = new Date().getTime();
      var distance = countdownDate - currentDate;

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (minutes >= 0 && seconds >= 0) {
        countdownClock.innerHTML = "0" + minutes + ":0" + seconds;
      }

      if (distance <= 0) {
        openElevator(isFirstElevatorCalled);
      }
    }, 1000);
  }

  function openElevator(isFirstElevatorCalled) {
    if (isFirstElevatorCalled) {
      document.getElementById("firstElevatorFloor").innerHTML =
        getFirstElevatorFloorValue() + "⬇";
      setFirstElevatorCalledValue(true);
    } else {
      document.getElementById("secondElevatorFloor").innerHTML =
        getSecondElevatorFloorValue() + "⬇";
      setSecondElevatorCalledValue(true);
    }

    setCallElevatorButtonClickedValue(false);

    var sound = new Audio("../sounds/ElevatorDingSound.mp3");
    sound.loop = false;

    window.setTimeout(function () {
      sound.play();
    }, 0);

    sound.addEventListener("ended", function () {
      window.location.href = "insideAnElevator.html";
    });
  }
});
