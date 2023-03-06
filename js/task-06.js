const inputRef = document.querySelector("#validation-input");
console.log('Потерял БЛЮР');


inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
console.log('Потерял БЛЮР');
console.log(event.currentTarget.value.length);
console.log(inputRef.dataset.length);
if(event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
} else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
}

};