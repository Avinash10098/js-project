import { getElement, getFromLocalStorage, setUptoLoacalStorage } from "../src/utils.js";
import opencart from "../src/opencart.js";
import addCartDom from "./addCartDom.js";

import { findProduct } from "../src/store.js";

const circle = getElement('.circle');
const cartItemDom = getElement('.cart-items');
const cartTotal = getElement('.cart-total')

let cart = getFromLocalStorage('cart');

export const addToCart = (id) => {
    // console.log(id);
    let item = cart.find((cartItem) => cartItem.id === id);
    // console.log(item.id);
    // if item enesiaclly is not present in cart
    if (!item) {
        // console.log(item);
        let product = findProduct(id);
        // console.log(product);
        // add item to the the
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addCartDom(product);
    } else {
        // console.log(item);
        // update value if item is alredy present
        const amount = increseAmount(id);
        const item = [...cartItemDom.querySelectorAll('.cart-item-amount')];
        const newAmount = item.find((value) => value.dataset.id === id);
        newAmount.textContent = amount;
    }
    displayCartItemCount();

    displayCartTotal();

    setUptoLoacalStorage('cart', cart);

    opencart();
}

function increseAmount(id) {
    // console.log(id);
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: newAmount };
            // console.log(cartItem);
        }
        return cartItem;
    })
    return newAmount;
}

function decreaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: newAmount };
        }
        return cartItem;
    })
    return newAmount;
}

function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0)
    // console.log(amount);
    circle.textContent = amount;
}

function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount * cartItem.price);
    }, 0)
    // console.log(total);
    cartTotal.textContent = `total = ${total / 100}`;
}

function dispayCartDom() {
    cart.forEach((cartItem) => {
        addCartDom(cartItem);
    });
}

function removeItem(Id) {
    // console.log(id);
    cart = cart.filter((cartItem) => cartItem.id !== Id);
}

function setUpcartFunctionality() {

    cartItemDom.addEventListener('click', function (e) {
        // console.log("Avinash");
        const element = e.target;
        const parent = e.target.parentElement;
        const ID = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id;

        if (element.classList.contains('cart-item-remove-btn')) {
            // console.log(ID);
            removeItem(ID);

            element.parentElement.parentElement.remove();
        }

        if (parent.classList.contains('cart-item-increase-btn')) {
            const newAmount = increseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }

        if (parent.classList.contains('cart-item-decrease-btn')) {
            const newAmount = decreaseAmount(parentID);
            parent.previousElementSibling.textContent = newAmount;
        }

        displayCartItemCount();
        displayCartTotal();
        setUptoLoacalStorage('cart', cart);
    })
}

const init = () => {
    displayCartItemCount();
    displayCartTotal();
    dispayCartDom();
    setUpcartFunctionality();
}
init();