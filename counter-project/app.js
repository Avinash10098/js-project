
// // one solution

// const decBtn = document.querySelector('.DECREASE')
// const restBtn = document.querySelector('.RESET')
// const inBtn = document.querySelector('.INCREASE')
// let count = 0;
// const value = document.querySelector('.number');
// decBtn.addEventListener('click', function () {
//     count--;
//     value.textContent = count;
//     value.style.color = 'red'
// })
// restBtn.addEventListener('click', function () {
//     count = 0;
//     value.textContent = count;
//     value.style.color = 'black'
// })
// inBtn.addEventListener('click', function () {
//     count++;
//     value.textContent = count;
//     value.style.color = 'green'
// })


// //end of 1st solution

// 2nd solution

const value = document.querySelector('.number');
const btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach(function (items) {
    items.addEventListener('click', function (e) {
        let cls = e.currentTarget.classList;
        if (cls.contains('DECREASE')) {
            count--;
        } else if (cls.contains('INCREASE')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = 'green'
        }
        if (count < 0) {
            value.style.color = 'red'
        }

        if (count === 0) {
            value.style.color = 'black'
        }
    })
})




