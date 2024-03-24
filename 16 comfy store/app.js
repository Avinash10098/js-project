import opencart from "./src/opencart.js";
import { getElement } from "./src/utils.js";
import fetchdata from "./src/fetchdata.js";
import { store, setUpStore } from "./src/store.js";
import display from "./src/displayProduct.js";
import openAndCloseNavBar from "./src/navbar.js";
const url = 'https://course-api.com/javascript-store-products';



openAndCloseNavBar();
const displayFeture = async () => {
    const data = await fetchdata(url);
    setUpStore(data);
    const featuredProduct = store.filter((red) => red.featured === true);
    display(featuredProduct, getElement('.page2-container'));
}
opencart();


window.addEventListener('DOMContentLoaded', displayFeture);