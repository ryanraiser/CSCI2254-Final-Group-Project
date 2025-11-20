document.addEventListener("DOMContentLoaded", () => {
  fetch("recipes.json")
    .then((r) => r.json())
    .then((data) => {
      const recipes = data.recipes;
      renderRecipes(recipes);
      searchRecipes(recipes);
    });
});

function createRecipe(rec) {
  return `
    <div class="card">
      <h2>${rec.title}</h2>
      <p class="desc">${rec.description}</p>

      <img class="card-img" src="${rec.image}" alt="${rec.title}">

      <input 
        type="number" 
        class="servings-input" 
        min="1" 
        placeholder="Intended Serving Size"
      />

      <h3>Ingredients</h3>
      <ul class="ing-list">
        ${rec.ingredients
          .map((item) => `<li>${item.qty} ${item.item}</li>`)
          .join("")}
      </ul>

      <h3>Instructions</h3>
      <p class="inst">${rec.instructions}</p>
  </div>
  `;
}

function renderRecipes(recipeArray) {
  const recipes = document.querySelector(".recipeList");
  recipes.innerHTML = "";
  recipeArray.forEach((recipe) => {
    recipes.innerHTML += createRecipe(recipe);
  });
}

function searchRecipes(recipeArray) {
  const recipeInput = document.querySelector("#recipes .search input");
  const recipeList = document.querySelector("#recipes .recipelist");

  recipeInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerrCase();

    const filtered = data.projects.filter(
      (r) =>
        r.title.toLowerCase().includes(value) ||
        r.description.toLowerCase().includes(value) ||
        r.instructions.toLowerCase().includes(value)
    );
    recipeList.innerHTML = filtered.map((r) => createRecipe(r)).join("");
  });
}
