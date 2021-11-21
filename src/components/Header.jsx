import React from "react";
import { Link } from "react-router-dom";
import { signIn } from "../auth/google";

const Header = () => {
  return (
    <>
      <header
        className="App-header"
        style={{ marginBottom: 50, color: "#030707" }}
      >
        <nav
          style={{ background: "#9edbff" }}
          className="navbar navbar-expand-lg navbar-light "
        >
          <div className="container-fluid" style={{ padding: "0 50px" }}>
            <Link className="navbar-brand" to="#">
              clyric
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link" to="/translations">
                    Translations
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/create-translation">
                    Create Translation
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ flexGrow: 0 }}
            >
              <button className="btn btn-primary" onClick={signIn}>
                Sign In With Google
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
