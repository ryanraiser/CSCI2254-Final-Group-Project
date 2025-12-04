export default function renderWelcome() {
  return `
          <section class="welcome">
          <img src="images/logo.png" alt="logo"/>
          <div class="welcome-content">
            <h2>Ready to Make your Next Event Perfect?</h2>
            <p>
              Easily plan meals for roomates, friends, or large groups. Scale ingredient amounts automatically and follow simple cooking steps.
            </p>
            <a href="?plan=plannerMode" class="plan-button">Start Cooking!</a>
          </div>
        </section>
        `;
}
