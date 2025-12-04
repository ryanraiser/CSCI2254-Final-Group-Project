import { renderRecipes, searchRecipes } from "./Recipes.js";
import renderWelcome from "./Welcome.js";

export default function renderMain(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
        ${renderWelcome()}
        ${renderRecipes(data.recipes)}
    `;

  searchRecipes(data);
}
