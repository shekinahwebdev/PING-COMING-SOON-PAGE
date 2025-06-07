import React from "react";
import "./App.css";
const App = () => {
  return (
    <main className="main_page">
      <img src="/images/logo.svg" alt="Logo" />
      <p>
        We are launching <strong>soon!</strong>
      </p>
      <p>Subscribe and get notified</p>

      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="subit" aria-label="Notify me">
          Notify Me
        </button>
      </form>

      <div className="dash_board">
        <img src="/images/illustration-dashboard.png" alt="Illustration" />
      </div>

      <footer className="footer">
        <div className="footer_logo">
          <img src="/images/facebook-4.png" alt="Logo" />
          <img src="/images/twitter.png" alt="Logo" />
          <img src="/images/instagram-3.png" alt="Logo" />
        </div>
        <p> &copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;
