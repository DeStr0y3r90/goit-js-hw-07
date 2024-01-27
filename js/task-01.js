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