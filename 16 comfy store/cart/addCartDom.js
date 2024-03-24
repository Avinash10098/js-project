import { getElement } from "../src/utils.js";

const cartItem = getElement('.cart-items');

const addCartDom = ({ name, image, price, amount, id }) => {
    // console.log(product);
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);

    article.innerHTML = `
    <img src="${image}" class="cart-item-img"
                            alt="albany table">
                        <div>
                            <h4 class="cart-item-name">${name}</h4>
                            <p class="cart-item-price" id="price">$${price / 100}</p>
                            <button class="cart-item-remove-btn" data-id="${id}">remove</button>
                        </div>

                        <div>
                            <button class="cart-item-increase-btn" data-id="${id}">
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <p class="cart-item-amount" data-id="${id}"> 1</p>
                            <button class="cart-item-decrease-btn" data-id="${id}">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
    `
    cartItem.appendChild(article);

}

export default addCartDom;