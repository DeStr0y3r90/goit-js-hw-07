const divControl = document.querySelector("#controls");

const btnCreate = document.querySelector("#controls button[data-create]");

const btnDestroy = document.querySelector("#controls button[data-destroy]");

const divChange = document.querySelector("#boxes");

const inputNumber = document.querySelector("#controls input[type=number]");

btnCreate.addEventListener("click", getNumber);

btnDestroy.addEventListener("click", putAwayBoxes);

function getNumber() {
  let amount = inputNumber.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Введіть число від 1 до 100");
  }
  inputNumber.value = "";
}

function putAwayBoxes() {
  divChange.innerHTML = "";
}

function createBoxes(amount) {
  divChange.innerHTML = "";
  let count = 10;
  let i = 30;
  let b = 100;
  for (let index = 1; index <= amount; index++) {
    let color = getRandomHexColor();
    let colorBorder = getRandomHexColor();
    const strHtml = `<div 
    style="
    width:${i}px; 
    height:${i}px; 
    border:1px solid ${colorBorder};
    margin-left: ${b}px;
    background-color: ${color}">
    </div>`;
    divChange.insertAdjacentHTML("beforeend", strHtml);
    b -= 5;
    i += count;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}