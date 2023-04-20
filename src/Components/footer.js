import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function Footer() {
  return (
    <Router>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#1A1B26" }}
      >
        <div className="container pt-4">
          <section className="mb-0">
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AnujChandel/Infinitrix"
              role="button"
              data-mdb-ripple-color="light"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-light p-3">
          © 2023 Infinitrix.com. All rights reserved.
        </div>
      </footer>
    </Router>
  );
}
