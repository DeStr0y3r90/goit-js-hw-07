const body = document.body;

const button = document.querySelector(".change-color");

const span = document.querySelector(".color");

button.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.style.color = color;
  span.textContent = `- ${color}`;
}