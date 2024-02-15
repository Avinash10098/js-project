
let product = [...products];
// console.log(product);

const secondContainer = document.querySelector('.second-container');

const displayItem = () => {

    if (product.length < 1) {
        secondContainer.innerHTML = `<h5>sorry , item is not found</h5>`
        return;
    }

    secondContainer.innerHTML = product.map(({ id, title, image, price }) => {
        return `<article id = "${id}">
                <img src="${image}">
                <footer>
                    <h4>${title}</h4>
                    <span>$${price}</span>
                </footer>
            </article>`
    }).join(' ')
}

displayItem();


const form = document.querySelector('.form-container');
const search = document.querySelector('.search');

form.addEventListener('keyup', () => {
    product = products.filter((red) => {
        const value = search.value;
        return red.title.toLowerCase().includes(value);
    })
    displayItem();
})

const btnContainer = document.querySelector('.btn-container');

const button = () => {
    const buttons = ['All', ...new Set(product.map((red) => red.company))];
    btnContainer.innerHTML = buttons.map((red) => {
        return `<button class="butt" data-id="${red}">${red}</button>`
    }).join(' ')
}

button();

btnContainer.addEventListener('click', (e) => {
    const element = e.target;
    if (element.dataset.id === 'All') {
        product = [...products]
    } else {
        product = products.filter((red) => {
            return red.company === element.dataset.id;
        })
    }
    value = '';
    displayItem();
})
