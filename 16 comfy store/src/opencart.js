import { getElement } from "./utils.js";

const cart = getElement('.cart-overlay');
const cartbtn = getElement('.cart-btn');
const closeBtn = getElement('.cart-close')


const opencart = () => {
    cartbtn.addEventListener('click', function () {
        cart.classList.add('show');
    })
    closeBtn.addEventListener('click', function () {
        cart.classList.remove('show');
    })
}


// const opencart = () => {
//     cart.classList.add('show');
// };


export default opencart;