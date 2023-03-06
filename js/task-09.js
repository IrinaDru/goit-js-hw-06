const btnRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color');
const body = document.body;
const colorRef = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnRef.addEventListener('click', onColorChange);

function onColorChange() {
  body.style.backgroundColor = colorRef;
  nameColorRef.textContent = colorRef;
}