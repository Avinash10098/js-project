import { getElement } from "../src/utils.js";
import display from "../src/displayProduct.js";

const setPrice = (store) => {
    const priceInput = getElement('.price-filter');
    const preiceValue = getElement('.price-value');

    let maxPrice = store.map((red => red.price));
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice / 100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    preiceValue.textContent = `value : $${maxPrice}`;

    priceInput.addEventListener('input', function () {
        const value = parseInt(priceInput.value);
        preiceValue.textContent = `Value : $${value}`;
        let newArray = store.filter((red) => red.price / 100 <= value);
        display(newArray, getElement('.second-container'), true);
        if (newArray.length < 1) {
            const container = getElement('.second-container');
            container.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
        }
    });
}

export default setPrice;