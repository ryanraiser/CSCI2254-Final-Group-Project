import { fractionLogic } from "./FractionLogic.js";

export default function renderShoppingList(rec, servings) {
  document.body.classList.add("shopping-mode");

  const body = document.querySelector("body");
  body.innerHTML = `
    <main class="shop-main">
      <section class="shopping">
        <h2>Shopping List for ${rec.title}</h2>
        <p>Servings: ${servings}</p>

        <ul>
        ${rec.ingredients
          .map((i) => `<li>${fractionLogic(i, servings)} ${i.item}</li>`)
          .join("")}
        </ul>
      </section>
    </main>
    `;
}
