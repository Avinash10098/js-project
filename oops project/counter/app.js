
function getElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }
    throw new Error(
        `plese enter the valid selector or this ${selector} may not present in html file `
    );
}

function Counter(element, value) {
    this.element = element;
    this.value = value;

    this.RESETBtn = element.querySelector('.RESET');
    this.DECREASEBtn = element.querySelector('.DECREASE');
    this.INCREASEBtn = element.querySelector('.INCREASE');
    this.number = element.querySelector('.number');
    this.number.textContent = value;
    this.INCREASE = this.INCREASE.bind(this);
    this.DECREASE = this.DECREASE.bind(this);
    this.RESET = this.RESET.bind(this);
    this.RESETBtn.addEventListener('click', this.RESET);
    this.DECREASEBtn.addEventListener('click', this.DECREASE);
    this.INCREASEBtn.addEventListener('click', this.INCREASE);
}

Counter.prototype.INCREASE = function () {
    this.value++;
    this.number.textContent = this.value;
}
Counter.prototype.DECREASE = function () {
    this.value--;
    this.number.textContent = this.value;
}
Counter.prototype.RESET = function () {
    this.value = 0;
    this.number.textContent = 0;
}



const counterOne = new Counter(getElement('.counertOne'), 0);
const counterTwo = new Counter(getElement('.counertTwo'), 0);