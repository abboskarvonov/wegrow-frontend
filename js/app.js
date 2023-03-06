"use strict";

const toggleBtn = document.querySelector(".toggleBtn");
const nav = document.querySelector("#nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
  nav.classList.toggle("hide-nav");
});
