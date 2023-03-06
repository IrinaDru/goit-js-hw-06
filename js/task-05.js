const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");
// console.log(input);


// input.addEventListener('input', event => {   
//     console.log(event.currentTarget.value);
//     nameLabel.textContent = event.currentTarget.value;   
// });

const defaultValue = 'Anonymous';

input.addEventListener('input', event =>  {

  if (event.target.value != '') {
    nameLabel.textContent = event.target.value;
  } else {
    nameLabel.textContent = defaultValue;
  }
});

