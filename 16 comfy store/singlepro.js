import './src/opencart.js'
import './cart/setUpcart.js'
import openAndCloseNavBar from './src/navbar.js';
openAndCloseNavBar();
import { addToCart } from "./cart/setUpcart.js";
import { getElement, singleProductUrl } from "./src/utils.js";
import opencart from "./src/opencart.js";

const containerOfSingleProduct = getElement('.container-of-singleProduct');
const Image = getElement('.image');
const Titel = getElement('.titel');
const conpanyName = getElement('.conpany-name');
const singleProductPrice = getElement('.single-product-price');
const text = getElement('.text');
const addtoCartBtn = getElement('.addTocart-btn');
const pageLoading = getElement('.page-loading');
const changeSpan = getElement('.change');

let productID;

window.addEventListener('DOMContentLoaded', async function () {
    const urlId = window.location.search;
    // const urlId = "hellow";
    try {
        const response = await fetch(`${singleProductUrl}${urlId}`);
        if (response.status >= 200 && response.status <= 299) {
            const product = await response.json();
            // console.log(product);
            const { id, fields } = product;
            productID = id;
            const { name, company, description, price, colors } = fields;
            const image = fields.image[0].thumbnails.large.url;

            Titel.textContent = name;
            conpanyName.textContent = company;
            Image.src = image;
            singleProductPrice.textContent = `$${price / 100}`;
            text.textContent = description;
            changeSpan.textContent = name;
        } else {
            containerOfSingleProduct.innerHTML = `
               <div>
                 </h3>sorry product is not found<h3>
                 <button <a href = "index.html"> class = "back-btn">Back TO Home </a> </button>
               </div>
            `;
        }
    } catch (err) {
        console.log(err);
    }

    pageLoading.style.display = "none";
})
addtoCartBtn.addEventListener('click', function () {
    addToCart(productID);
});