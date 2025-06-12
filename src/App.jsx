import React from "react";
import { useFormik } from "formik";
import "./App.css";
const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Please provide a valid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      // page reload
      window.location.reload();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <main className="main_page">
      <img src="/images/logo.svg" alt="Logo" className="logo" />
      <p className="main_text">
        We are launching <strong>soon!</strong>
      </p>
      <p className="subscribe_text">Subscribe and get notified</p>

      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="input_container">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // className="input_email"
            className={`input_email ${
              formik.touched.email && formik.errors.email ? "error" : ""
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error_message">{formik.errors.email}</p>
          ) : null}
        </div>
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
