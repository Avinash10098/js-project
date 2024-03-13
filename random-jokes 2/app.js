// This is using promises

const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    getData(url)
        .then((red) => {
            displayData(red);
        }).catch((err) => {
            console.log(err);
        });
});

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText
                })
            }
        }
    })
}


function displayData(data) {
    //destructuring the object
    const { value: jokes } = JSON.parse(data);

    content.textContent = jokes;
    // you can also do the same

    // const data = JSON.parse(xhr.responseText);
    // content.textContent = data.value;
}