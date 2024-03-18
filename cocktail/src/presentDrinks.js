import fetchDrink from "./fetchDrinks.js";
import displayDriks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
const showDrinks = async (url) => {
    const data = await fetchDrink(url);

    const section = await displayDriks(data);

    if (section) {
        setDrink(section);
    }
}

export default showDrinks;