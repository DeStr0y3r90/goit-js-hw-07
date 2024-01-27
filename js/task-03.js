`use strict`;
const textInput = document.querySelector("#name-input");
let changeText = document.querySelector("#name-output");
const defoultText = changeText.textContent;
textInput.addEventListener("input", (event) => {
  if (
    event.currentTarget.value === "" ||
    event.currentTarget.value.match(/^\s*$/)
  ) {
    changeText.textContent = "Anonymous";
  } else {
    changeText.textContent = event.currentTarget.value.trim();
  }
});