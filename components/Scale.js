import { fractionLogic } from "./FractionLogic.js";

export default function scale(rec) {
  const scaleInput = document.querySelector("#scaleInput");
  const ingredientList = document.querySelector("#ingredientList");

  scaleInput.addEventListener("input", () => {
    const multiplier = Number(scaleInput.value) || 1;

    ingredientList.innerHTML = rec.ingredients
      .map((i) => {
        return `<li>${fractionLogic(i, multiplier)} ${i.item}</li>`;
      })
      .join("");
  });
}
