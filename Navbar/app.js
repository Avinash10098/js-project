const barBtn = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items');
barBtn.addEventListener('click', function () {
    navItems.classList.toggle('showData');
})