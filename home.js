document.addEventListener("DOMContentLoaded", () => {
  fetch("recipes.json")
    .then((r) => r.json())
    .then((data) => {
      const recipes = data.recipes;
      renderRecipes(recipes);
    });
});

function createRecipe(rec) {
  return `
    <div class="card">
        <h2>${rec.title}</h2>
        <p class="desc">${rec.description}</p>

        <input type="number" class="servings-input" min="1" placeholder="Intended Serving Size">

        <h3>Ingredients</h3>
        <ul class="ing-list">
          ${rec.ingredients
            .map((item) => `<li>${item.qty} ${item.item}</li>`)
            .join("")}
        </ul>

        <h3>Instructions</h3>
        <p class="inst">${rec.instructions}</p>
      </div>
    </div>
  `;
}

function renderRecipes(recipeArray) {
  const recipes = document.querySelector(".r");
  recipes.innerHTML = "";
  recipeArray.forEach((recipe) => {
    recipes.innerHTML += createRecipe(recipe);
  });
}
