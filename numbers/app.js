const number = [...document.querySelectorAll('.numbers')];

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let count = 0;

    const countNumbers = setInterval(() => {
        count += increment;

        if (count > value) {
            el.textContent = `${value}+`;
            clearInterval();
            return;
        }

        el.textContent = `${count}+`;
    }, 1)
}

number.forEach((itmes) => {
    // console.log(itmes);
    updateCount(itmes);
})