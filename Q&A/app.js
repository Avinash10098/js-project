// const showBtn = document.querySelectorAll('.question-btn');
// const text = document.querySelectorAll('.text');

// showBtn.forEach(function (items) {
//     const btn = items.querySelector('que')
//     items.addEventListener('click', function (e) {
//         const center = e.currentTarget.parentElement.parentElement;
//         center.classList.toggle('showData');
//     })
// })

const centers = document.querySelectorAll('.center');

centers.forEach(function (items) {
    const btns = items.querySelector('.question-btn');
    btns.addEventListener('click', function () {
        centers.forEach(function (red) {
            if (red !== items) {
                red.classList.remove('showData');
            }
        })
        items.classList.toggle('showData');
    })
})

