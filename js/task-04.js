`use strict`;
const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const registerValue = {};

  const form = event.target;

  const email = form.elements.email.value;

  const password = form.elements.password.value;

  if (email.length === 0 || password.length === 0) {
    return alert("All form fields must be filled in");
  } else if (!email.includes("@")) {
    return console.log("enter the correct mail format");
  } else {
    registerValue.email = `${email}`.trim();
    registerValue.password = `${password}`.trim();
  }

  console.log(registerValue);

  form.reset();
}