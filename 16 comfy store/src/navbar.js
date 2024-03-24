import { getElement } from "./utils.js";

const navBtn = getElement('.toggle-nav');
const resNav = getElement('.res-nav');
const closeBtn = getElement('.res-nav-close');

function openAndCloseNavBar() {
    navBtn.addEventListener('click', function () {
        resNav.classList.add('show');
    })

    closeBtn.addEventListener('click', function () {
        resNav.classList.remove('show');
    })
}

export default openAndCloseNavBar;
