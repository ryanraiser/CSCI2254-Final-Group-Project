import recipeCardHTML from "./RecipeCard.js";

export default function renderFavorites(favoriteIds, data) {
  const favorites = document.querySelector("#favorites-container");

  if (favoriteIds == null || favoriteIds.length == 0) {
    favorites.innerHTML = `<p class="no-favorites">Like a recipe to add it to your Cookbook!</p>`;
    return;
  }

  const allRecipes = data.recipes;
  const favs = favoriteIds
    .map((id) => {
      const rec = allRecipes.find((r) => r.id == id);
      return rec ? recipeCardHTML(rec) : "";
    })
    .join("");

  favorites.innerHTML = favs;
}
