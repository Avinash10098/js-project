const btn = document.querySelector('.btn');
const articles = document.querySelector('.main-container');

btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
})

const articleData = items.map((item) => {
    const { title, time, pra } = item;

    return ` <article>
                <h1>${title}</h1>
                <span><i>${time}</i></span>
                <p>${pra}</p>
            </article>`
}).join(' ');

articles.innerHTML = articleData;
