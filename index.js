import renderMain from "./components/MainPage.js";
import renderNav from "./components/Nav.js";
import renderRecipeDetails from "./components/RecipeDetail.js";
import { renderPlanner } from "./components/Planner.js";
import renderAccountPage from "./components/Account.js";

fetch("recipes.json")
  .then((r) => r.json())
  .then((data) => {
    renderNav();

    const urlParams = new URLSearchParams(window.location.search);

    const recipeId = urlParams.get("recipe");
    const plannerMode = urlParams.get("plan");
    const accountMode = urlParams.get("account");

    if (recipeId) {
      const rec = data.recipes.find((rec) => rec.id == recipeId);
      renderRecipeDetails(rec);
      return;
    }
    if (plannerMode) {
      renderPlanner(data);
      return;
    }
    if (accountMode !== null) {
      renderAccountPage(data);
      return;
    } else {
      renderMain(data);
    }
  });
