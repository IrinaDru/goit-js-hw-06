const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

// console.log(ingredientsListRef);

const elements = ingredients.map(option => {
  const elRef = document.createElement('li');
  elRef.classList.add('item');
  elRef.textContent = option;
  return elRef;
});

console.log(elements);

ingredientsListRef.append(...elements);


