const openBtn = document.querySelector('.open-btn');
const overlayContainer = document.querySelector('.overlay-container');
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', function () {
    overlayContainer.classList.add("showDataOfOverlay");
})

closeBtn.addEventListener('click', function () {
    overlayContainer.classList.remove("showDataOfOverlay")
})