const btn = document.querySelector('.btn');
const mainHeading = document.querySelector('.main-heading');

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getHex()];
    }
    document.body.style.backgroundColor = hexColor;
    mainHeading.innerHTML = `background color : ${hexColor}`
})

function getHex() {
    return Math.floor(Math.random() * hex.length);
}


