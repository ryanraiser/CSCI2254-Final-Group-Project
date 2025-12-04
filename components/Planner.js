import recipeCardHTML from "./RecipeCard.js";

export function renderPlanner(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="planner">
      <h2>Plan Your Group Meal</h2>

      <div class="planner-form">
        <label>Number of Guests</label>
        <input type="number" id="guestsInput" min="1" value="6">

        <label>Occasion</label>
        <select id="occasionInput">
          <option value="">Any</option>
          <option value="Gameday">Game Day</option>
          <option value="Healthy">Healthy</option>
          <option value="Family Dinner">Family Dinner</option>
          <option value="Quick">Quick & Easy</option>
          <option value="Meal Prep">Meal Prep</option>
          <option value="Cold Weather">Cold Weather</option>
          <option value="Side Dish">Side Dish</option>
        </select>

        <label>Prep Time (max)</label>
        <select id="prepInput">
          <option value="">Any</option>
          <option value="10">Under 10 minutes</option>
          <option value="20">Under 20 minutes</option>
          <option value="30">Under 30 minutes</option>
          <option value="45">Under 45 minutes</option>
          <option value="60">Under 1 hour</option>
        </select>

        <label>Difficulty</label>
        <select id="difficultyInput">
          <option value="">Any</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button id="filterButton" class="planner-button">Find Recipes</button>
      </div>

      <ul id="plannerResults" class="planner-results"></ul>
    </section>
  `;

  plannerFilter(data);
}

export function plannerFilter(data) {
  const guestsInput = document.querySelector("#guestsInput");
  const occasionInput = document.querySelector("#occasionInput");
  const prepInput = document.querySelector("#prepInput");
  const difficultyInput = document.querySelector("#difficultyInput");
  const filterButton = document.querySelector("#filterButton");
  const results = document.querySelector("#plannerResults");

  filterButton.addEventListener("click", () => {
    const guests = guestsInput.value;
    const occasion = occasionInput.value;
    const prep = prepInput.value;
    const difficulty = difficultyInput.value;

    const filtered = data.recipes.filter((r) => {
      let matchOccasion = false;

      if (occasion.length < 1) {
        matchOccasion = true;
      } else {
        for (let i = 0; i < r.occasion.length; i++) {
          if (r.occasion[i] == occasion) {
            matchOccasion = true;
            break;
          }
        }
      }

      const matchPrep = prep.length < 1 || Number(r.prep) <= Number(prep);

      const matchDifficulty = !difficulty || r.difficulty == difficulty;

      return matchOccasion && matchPrep && matchDifficulty;
    });

    results.innerHTML =
      filtered.length < 1
        ? "<p>No recipes match your filters.</p>"
        : filtered.map(recipeCardHTML).join("");
  });
}
