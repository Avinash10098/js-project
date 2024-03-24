
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';

const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    } else {
        throw Error(`plz check selector ${selector}`);
    }
}

const getFromLocalStorage = (item) => {
    let storeItem = localStorage.getItem(item);
    if (storeItem) {
        storeItem = JSON.parse(localStorage.getItem(item))
    } else {
        storeItem = [];
    }
    return storeItem;
}

const setUptoLoacalStorage = (store, item) => {
    localStorage.setItem(store, JSON.stringify(item));
}


export { getElement, setUptoLoacalStorage, getFromLocalStorage, singleProductUrl };