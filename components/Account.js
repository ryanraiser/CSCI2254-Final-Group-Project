import renderFavorites from "./RenderFavorites.js";

export default function renderAccountPage(data) {
  const main = document.querySelector("main");
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    main.innerHTML = `
        <section class="account-page">
          <h2 class="welcome-title">Welcome, ${user.username}!</h2>
          
          <h3 class="cookbook-title">Your Cookbook</h3>
          <div id="favorites-container" class="recipelist"></div>

          <button id="logout-button">Logout</button>
        </section>
      `;

    const account = JSON.parse(
      localStorage.getItem("account:" + user.username)
    );
    renderFavorites(account.favorites, data);

    const logout = document.querySelector("#logout-button");
    logout.addEventListener("click", () => {
      localStorage.removeItem("user");
      renderAccountPage(data);
    });

    return;
  }

  main.innerHTML = `
      <section class="account-page">
        <h2>Account Login</h2>
  
        <div>
          <label>Username</label>
          <input id="loginUser" type="text">
  
          <label>Password</label>
          <input id="loginPass" type="password">
  
          <button id="login-button">Log In</button>
        </div>
  
        <h2>Create Account</h2>
  
        <div>
          <label>Username</label>
          <input id="signupUser" type="text">
  
          <label>Password</label>
          <input id="signupPass" type="password">
  
          <button id="signup-button">Create Account</button>
        </div>
      </section>
    `;

  const login = document.querySelector("#login-button");
  login.addEventListener("click", () => {
    const enteredUser = document.querySelector("#loginUser").value;
    const enteredPass = document.querySelector("#loginPass").value;

    const stored = JSON.parse(localStorage.getItem("account:" + enteredUser));

    if (!stored) {
      alert("That username does not exist.");
      return;
    }

    if (stored.password != enteredPass) {
      alert("Incorrect password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username: enteredUser }));
    renderAccountPage(data);
  });

  const signup = document.querySelector("#signup-button");
  signup.addEventListener("click", () => {
    const newUser = document.querySelector("#signupUser").value;
    const newPass = document.querySelector("#signupPass").value;

    const existing = localStorage.getItem("account:" + newUser);

    if (existing) {
      alert("That username is already taken.");
      return;
    }

    localStorage.setItem(
      "account:" + newUser,
      JSON.stringify({
        username: newUser,
        password: newPass,
        favorites: [],
      })
    );

    alert("Account created! You can now log in.");
  });
}
