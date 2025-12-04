export default function attachFavoriteLogic(rec) {
  const favButton = document.querySelector("#fav-button");
  const favIcon = document.querySelector("#fav-icon");
  if (!favButton || !favIcon) return;

  const signedIn = JSON.parse(localStorage.getItem("user"));

  if (!signedIn) {
    // redirect if not signed in
    favButton.addEventListener("click", () => {
      alert("Sign in to save favorites!");
      window.location.href = "?account";
    });
    return;
  }

  // get account info for favorites
  const accountKey = "account:" + signedIn.username;
  const account = JSON.parse(localStorage.getItem(accountKey));

  // get images for like
  const outline = "images/heart-outline.png";
  const filled = "images/heart-green.png";

  // initial state variable to tell whether the user has a recipe liked or not
  const isFav = account.favorites.includes(rec.id);

  // Set initial state
  favIcon.src = isFav ? filled : outline;
  if (isFav) favButton.classList.add("liked");

  favButton.addEventListener("click", () => {
    // Recalculate *fresh* favorite status
    const currentlyFav = account.favorites.includes(rec.id);

    if (currentlyFav) {
      // Remove from favorites
      account.favorites = account.favorites.filter((id) => id !== rec.id);
      favIcon.src = outline;
      favButton.classList.remove("liked");
    } else {
      // Add to favorites
      account.favorites.push(rec.id);
      favIcon.src = filled;
      favButton.classList.add("liked");
    }

    localStorage.setItem(accountKey, JSON.stringify(account));
  });
}
