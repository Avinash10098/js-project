import get from "./get.js"

const title = get('.user-title');
const value = get('.user-value');
// const img = document.querySelector('.user-img');
const img = get('.user-img');
const btns = [...document.querySelectorAll('.icon')];


function displayPerson(data) {
    img.src = data.image;
    value.textContent = data.name;
    title.textContent = `My name is`;
    btns[0].classList.remove('active');
    btns.forEach((item) => {
        const lable = item.dataset.label;
        // console.log(lable);
        item.addEventListener('click', () => {
            title.textContent = `My ${lable} is`;
            value.textContent = data[lable];
            btns.forEach((red) => {
                red.classList.remove('active');
            })
            item.classList.add('active');
        })
    })
}

export default displayPerson;