export default function renderNav() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
      <div class="nav-left">
          <h1 class="logo">
            <img src="images/logo.png" alt="logo"/>
          </h1>
        </div>
        <div class="nav-right">
          <a href="?plan=plannerMode">Planner</a>
          <a href="index.html#r-anchor">Recipes</a>
          <a href="index.html">Home</a>
          <a href="?account">Account</a>
        </div>
        `;
}
