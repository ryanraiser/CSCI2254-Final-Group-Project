fetch("recipes.json")
  .then((r) => r.json())
  .then((data) => {
    const recipes = data.recipes;
    renderRecipes(recipes);
  });

function createRecipe(rec) {
  return `
    <div class="card">
        <h2>${rec.title}</h2>
        <p>${rec.description}</p>
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
