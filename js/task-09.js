const btnRef = document.querySelector('.change-color');
const nameColorRef = document.querySelector('.color');
const body = document.body;

btnRef.addEventListener('click', onColorChange);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



function onColorChange() {
  const colorRef = getRandomHexColor();
  body.style.backgroundColor = colorRef;
  nameColorRef.textContent = colorRef;
}