const itemCategories = document.querySelectorAll('li.item');
console.log(itemCategories);

console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
