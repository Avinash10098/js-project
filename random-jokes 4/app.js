// This is using async await

const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', async () => {

    try {
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);
    } catch (err) {
        console.log(err);
    }
});
function displayData({ value: jokes }) {
    //destructuring the object
    // const { value: jokes } = data;

    content.textContent = jokes;
    // you can also do the same

    // const data = JSON.parse(xhr.responseText);
    // content.textContent = data.value;
}