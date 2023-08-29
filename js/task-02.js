const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsContainer = document.querySelector('#ingredients');

const itemsIngredients = (options) => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = option;

    return itemEl;

   
  });

};


 
const elements = itemsIngredients(ingredients);

ingredientsContainer.append(...elements);

