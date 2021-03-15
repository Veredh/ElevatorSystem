"use strict";

window.addEventListener("load", () => {
  let bgImage = document.getElementById("bg_img");

  bgImage.src = "../images/frontDoor2.jpg";
  bgImage.addEventListener("load", function () {
    document.getElementById("enter").classList.add("btn");
    document.getElementById("enter").classList.remove("hidden");
  });

  document.getElementById("enter").addEventListener("click", function () {
    window.location.href = "elevatorWaiting.html";
  });
});
