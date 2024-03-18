import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";
const displayDrink = (data) => {
    hideLoading();
    const image = get('.drink-img');
    const drinkName = get('.drink-name');
    const drinkDec = get('.drink-desc');
    const ingredients = get('.drink-ingredients');

    const drink = data.drinks[0];

    const { strInstructions: desc, strDrink: name, strDrinkThumb: img } = drink;
    image.src = img;
    drinkName.textContent = name;
    drinkDec.textContent = desc;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ]
    ingredients.innerHTML = list.map((red) => {
        if (!red) return;
        return `<li>${red}</li>`
    }).join('');
    console.log(drink);
}

export default displayDrink;