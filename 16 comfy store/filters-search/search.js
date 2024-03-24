import { getElement } from "../src/utils.js";
import display from "../src/displayProduct.js";

const searchSetUp = (store) => {
    const form = getElement('.form-container');
    const search = getElement('.search');
    form.addEventListener('keyup', function () {
        const value = search.value;
        if (value) {
            const newStore = store.filter((data) => {
                let { name } = data;
                name = name.toLowerCase();
                if (name.startsWith(value)) {
                    return data;
                }
            })
            display(newStore, getElement('.second-container'))
            if (newStore.length < 1) {
                const chageData = getElement('.second-container');
                chageData.innerHTML = `<h2 class = "filter-err">Sorry ! no product match your search</h2>`
            }
        } else {
            display(store, getElement('.second-container'))
        }


    })
}

export default searchSetUp;