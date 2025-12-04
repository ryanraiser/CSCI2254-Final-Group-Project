import recipeCardHTML from "./RecipeCard.js";

export function renderRecipes(data) {
  return `
      <section class="recipes" id="r-anchor">
        <h2 class="recipes-title">Featured Recipes</h2>
        <p class="guide">Keep Scrolling to explore some of our favorite recipes!</p>
  
        <div class="search">
          <input type="search" name="r_list" placeholder="Search Recipes...">
        </div>
  
        <ul class="recipelist">${data
          .map((rec) => recipeCardHTML(rec))
          .join("")}
        </ul>
      </section>
    `;
}

export function searchRecipes(data) {
  const recipeInput = document.querySelector("#r-anchor .search input");
  const recipeList = document.querySelector(".recipelist");

  recipeInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = data.recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(value) ||
        r.description.toLowerCase().includes(value) ||
        r.instructions.toLowerCase().includes(value)
    );

    recipeList.innerHTML = filtered.map((rec) => recipeCardHTML(rec)).join("");
  });
}
