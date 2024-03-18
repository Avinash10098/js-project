import displayDrink from "./src/displaySingleDrink.js"
import fetchDrink from "./src/fetchDrinks.js";

window.addEventListener('DOMContentLoaded', async () => {
    const id = localStorage.getItem('drink');
    if (!id) {
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(drink);
    }

})
