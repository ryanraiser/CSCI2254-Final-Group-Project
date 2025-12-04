export default function recipeCardHTML(rec) {
  return `
    <a href="?recipe=${rec.id}" class="rec-link">
    <div class="rec-card">
      <h3 class="rec-title">${rec.title}</h3>
      <p class="rec-desc">${rec.description}</p>
  
      <img src="${rec.image}" alt="${rec.title}" class="rec-thumbnail">
  
      <div class="rec-tags">
        <p>Prep: ${rec.prep} mins</p>
        <p>Difficulty: ${rec.difficulty}</p>
        ${rec.occasion.map((o) => `<p>${o}</p>`).join("")}
      </div>
    </div>
  </a>
    `;
}
