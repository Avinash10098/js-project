const barBtn = document.querySelector('.nav-toggle');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');


barBtn.addEventListener('click', function () {
    const cls = container.classList.contains('showdata');
    if (!cls) {
        container.classList.toggle('showdata')
    }
})

closeBtn.addEventListener('click', function () {
    container.classList.remove('showdata')
})