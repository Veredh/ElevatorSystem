"use strict";
let elevatorSound;

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
    if (
      typeof callElevatorButtonClicked == "undefined" &&
      typeof firstElevatorFree == "undefined" &&
      typeof secondElevatorFree == "undefined" &&
      typeof firstElevatorFloor == "undefined" &&
      typeof secondElevatorFloor == "undefined" &&
      typeof elevatorCountdownTime == "undefined"
    ) {
      callElevatorButtonClicked = false;
      firstElevatorFree = true;
      secondElevatorFree = true;
      firstElevatorFloor = 1;
      secondElevatorFloor = 1;
      elevatorCountdownTime = 0;
    }
  };
  init();

  callElevatorButton.addEventListener("click", function () {
    callElevatorButtonClicked = true;
    changeButtonBackground();

    if (firstElevatorFree && secondElevatorFree) {
      if (firstElevatorFloor <= secondElevatorFloor) {
        callFirstElevator();
      } else {
        callSecondElevator();
      }
    } else if (secondElevatorFree) {
      callSecondElevator();
    } else if (firstElevatorFree) {
      callFirstElevator();
    } else {
      setTimeout(() => {}, 2000);
    }
  });

  function changeButtonBackground() {
    callElevatorButton.style.background = "red";
  }

  function callFirstElevator() {
    firstElevatorFree = false;
    callElevator(true);
  }

  function callSecondElevator() {
    secondElevatorFree = false;
    callElevator(false);
  }

  function callElevator(firstElevatorCalled) {
    let timeToAddToETA;

    if (firstElevatorCalled) {
      firstElevatorFloor > 7
        ? (timeToAddToETA = firstElevatorFloor)
        : (timeToAddToETA = 7);
    } else {
      secondElevatorFloor > 7
        ? (timeToAddToETA = secondElevatorFloor)
        : (timeToAddToETA = 7);
    }

    countdownETA(timeToAddToETA, firstElevatorCalled);
  }

  function countdownETA(timeToAddToETA, firstElevatorCalled) {
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
        openElevator(firstElevatorCalled);
      }
    }, 1000);
  }

  function openElevator(firstElevatorCalled) {
    if (firstElevatorCalled) {
      document.getElementById("firstElevatorFloor").innerHTML =
        firstElevatorFloor + "⬇";
    } else {
      document.getElementById("secondElevatorFloor").innerHTML =
        secondElevatorFloor + "⬇";
    }

    var sound = new Audio("../sounds/ElevatorDingSound.mp3");
    sound.loop = false;

    window.setTimeout(function () {
      sound.play();
    }, 10);
    sound.addEventListener("ended", function () {
      window.location.href = "insideAnElevator.html";
    });
  }
});
