// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку
// Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів і
// очищатися значення в інпуті.При повторному натисканні на кнопку Create поверх старої
// колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має
// очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно
// має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають додаватися
// нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один
// параметр — число, що зберігає кількість елементів для рендеру.Функція має створювати
// стільки < div > елементів, скільки вказано в параметрі amount і додавати їх у DOM
// дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію
// getRandomHexColor() для отримання випадкового кольору.

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