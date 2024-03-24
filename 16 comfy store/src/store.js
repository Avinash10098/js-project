import { setUptoLoacalStorage, getFromLocalStorage } from './utils.js'
let store = getFromLocalStorage('store');

const setUpStore = (data) => {
    // console.log(data);
    store = data.map((red) => {
        const { id, fields: { colors, company, featured, name, price, image: img } } = red
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, colors, company, price, image };
    })
    setUptoLoacalStorage('store', store);
}

// console.log(store);

const findProduct = (id) => {
    let product = store.find((product) => product.id === id);
    return product;
};

export { store, setUpStore, findProduct };
