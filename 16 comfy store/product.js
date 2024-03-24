import opencart from "./src/opencart.js";
import display from "./src/displayProduct.js";
import { getElement } from "./src/utils.js";
import { store } from "./src/store.js";
import searchSetUp from "./filters-search/search.js";
import setUpcompaines from "./filters-search/companies.js";
import setPrice from "./filters-search/price.js";
import openAndCloseNavBar from "./src/navbar.js";

openAndCloseNavBar();
const loading = getElement('.page-loading');

display(store, getElement('.second-container'))

searchSetUp(store);

setUpcompaines(store);

setPrice(store);
opencart();
loading.style.display = 'none';