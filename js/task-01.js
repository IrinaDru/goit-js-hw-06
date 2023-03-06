const navRef = document.querySelectorAll('li.item');
console.log('Number of categories:', navRef.length);


const categoryRef = document.querySelectorAll('h2');

categoryRef.forEach(function (category, index, array) {
    console.log('Category:', category.textContent);
    console.log('Elements:', category.nextElementSibling.children.length);
})

