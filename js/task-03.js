// Завдання 3
// Напиши скрипт, який під час набору тексту в інпуті input #name - input(подія input)
// підставляє його поточне значення в span#name - output як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або
// містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

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