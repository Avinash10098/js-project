import { addToCart } from "../cart/setUpcart.js";

const display = (products, element) => {
    element.innerHTML = products.map((red) => {
        const { id, name, image, price } = red;
        // console.log(red);
        return `  <article>
                <div class="product-container">
                    <img src="${image}" alt="">
                    <div class="product-icons">
                        <a href="singproduct.html?id=${id}" class="product-icon">
                            <i class="fas fa-search"></i>
                        </a>
                        <button class="product-cart-btn product-icon" data-id="${id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <p>${name}</p>
                    <h5>$${(price) / 100}</h5>
                </footer>
            </article>`

    }).join('');

    // if (filters) return

    element.addEventListener('click', function (e) {
        const parent = e.target.parentElement;
        if (parent.classList.contains('product-cart-btn')) {
            // console.log(parent.dataset.id);
            addToCart(parent.dataset.id);
        }
    });

}


export default display;