
const btn = document.querySelectorAll('.tab-btn ');
const about = document.querySelector('.col2');
const allInfo = document.querySelectorAll('.allInfo');

about.addEventListener('click', function (e) {
    const tar = e.target.dataset.id;
    btn.forEach(function (items) {
        if (tar) {
            items.classList.remove('active');
            e.target.classList.add('active');
        }
        allInfo.forEach(function (el) {
            el.classList.remove('active');
        })

        const element = document.getElementById(tar);
        element.classList.add('active');
    })

})