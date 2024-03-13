const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    getData(url);
});

function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return
        if (xhr.status === 200) {
            //destructuring the object
            const { value: jokes } = JSON.parse(xhr.responseText);

            content.textContent = jokes;
            // you can also do the same 

            // const data = JSON.parse(xhr.responseText);
            // content.textContent = data.value;
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText
            });
        }
    }

}