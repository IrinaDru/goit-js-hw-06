const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');


let counterValue = 0;

const decrementCounter = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const incrementCounter = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);
