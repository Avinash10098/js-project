const btn = document.querySelector('.btn');
const mainHeading = document.querySelector('.main-heading');

btn.addEventListener('click', function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);;
    let b = Math.floor(Math.random() * 256);;
    document.body.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
    mainHeading.innerHTML = `background color : rgb(${r} , ${g} , ${b})`
})
