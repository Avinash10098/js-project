const form = document.querySelector('form');
const alert = document.querySelector('.alert');
const inputSection = document.querySelector('.input-section');
const getInput = document.querySelector('.get-input');
const submitBtn = document.querySelector(".Submit-btn");
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


let editElement;
let editFlag = false;
let editId = "";

form.addEventListener('submit', addItems);
clearBtn.addEventListener('click', clearItems);

function addItems(e) {
    e.preventDefault();
    const value = getInput.value;
    const id = new Date().getTime().toString();


    if (value && !editFlag) {
        const element = document.createElement('article');
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-items");
        element.innerHTML = `<p class="text">${value}</p>
                        <div class="btn-container">
                            <!-- edit btn -->
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <!-- delete btn -->
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`

        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);


        groceryList.appendChild(element);
        groceryContainer.classList.add('showData')
        displayAlert('yep ! you add the item', 'success');
        addToLocalStorage(id, value);
        setBackToDefault();

    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("yep ! you change", 'success');
        editLocalStorage(id, value)
        setBackToDefault();
    } else {
        displayAlert('Plese enter the item', 'danger');
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element);
    if (groceryList.children.length === 0) {
        groceryContainer.classList.remove('showData');
    }
    displayAlert("you delete the item", 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    getInput.value = editElement.innerHTML;
    editFlag = true;
    editItem = element.dataset.id;
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

function clearItems() {
    const element = document.querySelectorAll('.grocery-items');
    if (element.length > 0) {
        element.forEach(function (red) {
            groceryList.removeChild(red);
        })
    }

    groceryContainer.classList.remove('showData');
    displayAlert('You cleared the list', 'danger');
    setBackToDefault();
    localStorage.removeItem("list");

}

function setBackToDefault() {
    getInput.value = "";
    editFlag = false;
    editId = "";
}


function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}