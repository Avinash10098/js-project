import { getElement } from "../src/utils.js";
import display from "../src/displayProduct.js";
import { store } from "../src/store.js";

const btnContainer = getElement('.btn-container');
const butt = document.querySelectorAll('.butt');


const setUpcompaines = (store) => {
    const buttons = ['All', ...new Set(store.map((red) => red.company))];
    btnContainer.innerHTML = buttons.map((products) => {
        // console.log(products);
        return ` <button class="butt">${products}</button>`
    }).join('');


    btnContainer.addEventListener('click', function (e) {
        const element = e.target;
        // console.log(element.dataset.id);
        if (element.textContent === 'All') {
            display(store, getElement('.second-container'))
        }
        else {
            const newArray = store.filter((red) => {
                // console.log(red.company);
                // console.log(element.textContent);
                return red.company === element.textContent;
            })
            display(newArray, getElement('.second-container'))
        }
    })

}

export default setUpcompaines;