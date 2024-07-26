/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import "../css/styles.css";

function SignIn() {
  return (
    <React.Fragment>
      <header className="masthead" style={{ height: "80vh" }}>
        <nav className="navbar navbar-light fixed-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </nav>

        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-4">
              <div
                className="card border-0 shadow rounded-3 my-5"
                style={{ backgroundColor: "rgba(0,0,0,.75)" }}
              >
                <div className="card-body p-4 p-sm-5">
                  <h1 className="card-title text-white mb-5 fw-bold fs-5">
                    Sign In
                  </h1>
                  <form>
                    <div className="form-floating mb-4">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">
                        Email or Phone number
                      </label>
                    </div>
                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="mt-3">
                      <Link
                        className="d-grid text-white text-decoration-none"
                        to="/home"
                      >
                        <button
                          className="btn btn-primary btn-sm btn-login text-uppercase fw-bold"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </Link>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="rememberPasswordCheck"
                      >
                        <div className="d-flex">
                          <p className="me-5">Remember me</p>
                          <p className="ms-5 fs-6">
                            <a href="#" className="text-decoration-none">
                              Need help?
                            </a>
                          </p>
                        </div>
                      </label>
                    </div>

                    <Link
                      to="/home"
                      className="mb-2 btn btn-facebook btn-login text-muted fs-6 p-0"
                      type="submit"
                    >
                      Login with Facebook
                    </Link>

                    <p className="text-muted mt-2">
                      New to Netflix?
                      <a
                        href="#!"
                        className="text-decoration-none text-light ms-2"
                      >
                        {" "}
                        Sign up now
                      </a>
                    </p>
                    <p className="text-muted mb-5 fs-6">
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot.
                      <a href="!#" className="text-decoration-none text-blue">
                        Learn more.
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default SignIn;
