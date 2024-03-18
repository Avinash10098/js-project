import getElement from './getElement.js'
import { hideLoading } from './toggleLoading.js';

const displayDriks = ({ drinks }) => {
  const title = getElement('.title');
  const sectionCenter = getElement('.section-center');

  if (!drinks) {
    hideLoading();
    title.textContent = `sorry , the item is not present`;
    sectionCenter.innerHTML = "";
    return;
  }

  const newDrink = drinks.map((drink) => {
    // console.log(drink);

    const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;

    return `<a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${img}" alt="cocktail">
          <h3>${name}</h3>
        </article>
      </a>`
  }).join('');
  hideLoading();
  sectionCenter.innerHTML = newDrink;
  return sectionCenter;
}

export default displayDriks;