import get from "./utiles/get.js"
import getUser from "./utiles/getUser.js";
import displayPerson from "./utiles/displayPerson.js"



const btn = get('.btn');

// console.log(btns);


const showData = async () => {
    const data = await getUser();
    displayPerson(data);
}


window.addEventListener('DOMContentLoaded', showData);
btn.addEventListener('click', showData);


