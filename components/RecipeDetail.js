import scale from "./Scale.js";
import renderShoppingList from "./ShoppingList.js";
import attachFavoriteLogic from "./Favorites.js";
import { fractionLogic } from "./FractionLogic.js";

export default function renderRecipeDetails(rec) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="recipe-detail">
    
      <div class="title-row">
        <h2>${rec.title}</h2>
        <button id="fav-button" class="fav-btn">
          <img id="fav-icon" src="images/heart-outline.png" alt="favorite">
        </button>
      </div>
  
      
      <img src="${rec.image}" alt="${rec.title}">
      <p>${rec.description}</p>

      <div class="scaling-section">
        <label>Enter number of servings:</label>
        <input type="number" id="scaleInput" min="1" value="1">
      </div>

      <h3>Ingredients</h3>
      <ul id="ingredientList">
        ${rec.ingredients
          .map((i) => `<li>${fractionLogic(i, 1)} ${i.item}</li>`)
          .join("")}
      </ul>

      <button id="shoppingListButton">
        Generate Shopping List
      </button>

      <h3>Instructions</h3>
      <p>${rec.instructions}</p>
    </section>
  `;

  scale(rec);
  attachFavoriteLogic(rec);

  const listButton = document.querySelector("#shoppingListButton");
  const scaleInput = document.querySelector("#scaleInput");

  listButton.addEventListener("click", () => {
    const servings = scaleInput.value;
    renderShoppingList(rec, servings);
  });
}
