const positionRef = document.querySelector("#font-size-control");
const abracadabraRef = document.querySelector("#text");

positionRef.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);

    const size = event.currentTarget.value;
    console.log(size);

    abracadabraRef.style.fontSize = `${size}px`;
});