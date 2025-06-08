import React from "react";
import "./App.css";
const App = () => {
  return (
    <main className="main_page">
      <img src="/images/logo.svg" alt="Logo" className="logo" />
      <p className="main_text">
        We are launching <strong>soon!</strong>
      </p>
      <p className="subscribe_text">Subscribe and get notified</p>

      <form className="form">
        <input
          type="email"
          placeholder="Enter your email"
          className="input_email"
          required
        />
        <button type="submit" aria-label="Notify me" className="btn">
          Notify Me
        </button>
      </form>

      <div className="dash_board">
        <img
          src="/images/illustration-dashboard.png"
          alt="Illustration"
          className="illustration"
        />
      </div>

      <footer className="footer">
        <div className="footer_logo">
          <img src="/images/facebook-4.png" alt="Logo" />
          <img src="/images/twitter.png" alt="Logo" />
          <img src="/images/instagram-3.png" alt="Logo" />
        </div>
        <p className="copyright_info">
          {" "}
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default App;
