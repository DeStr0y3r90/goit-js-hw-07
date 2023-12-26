// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).
`use strict`;
const list = document.querySelector('#categories');
const listItem = document.querySelectorAll('.item');
console.log(`Nuber of categories: ${listItem.length}`);
function result(array) {
  for (const item of array) {
    let index = 0;
    console.log(`category: ${item.children[index].textContent}`);
    console.log(`Elements: ${item.children[index + 1].children.length}`);
    index += 1;
  }
}
result(listItem);