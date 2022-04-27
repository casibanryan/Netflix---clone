import Footer from '../include/Footer';
import React from 'react'
import logo from '../assets/img/logo.png';

function SignIn() {
  return (
    <React.Fragment>
   
    <header className="masthead" style={{ height: "80vh" }}>
        <nav className="navbar navbar-light static-top">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={ logo } />
                </a>
            </div>
        </nav>

        <div className="container position-relative">
            <div className="row justify-content-center">
                <div className="col-xl-4">
                    <div className="card border-0 shadow rounded-3 my-5" style={{ backgroundColor: "rgba(0,0,0,.75)" }}>
                        <div className="card-body p-4 p-sm-5">
                            <h1 className="card-title text-white mb-5 fw-bold fs-5">Sign In</h1>
                            <form>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control form-control-sm" id="floatingInput"
                                        placeholder="name@example.com" required />
                                    <label for="floatingInput">Email or Phone number</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" className="form-control form-control-sm" id="floatingPassword"
                                        placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="d-grid mt-3">
                                    <button className="btn btn-primary btn-sm btn-login text-uppercase fw-bold"
                                        type="submit">Sign
                                        in</button>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label className="form-check-label text-secondary" for="rememberPasswordCheck">
                                        <div className="d-flex">
                                            <p className="me-5">Remember me</p>
                                            <p className="ms-5 fs-6"><a href="!#" className="text-decoration-none">Need
                                                    help?</a>
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                <a href="!#" className="mb-2 btn btn-facebook btn-login text-muted fs-6 p-0" type="submit">
                                    <span style={{ backgroundColor:"#3B579D" }}
                                        className="fab fa-facebook-f me-2 text-light px-2 py-1"></span>
                                    Login
                                    with
                                    Facebook
                                </a>

                                <p className="text-muted mt-2">New to Netflix?<a href="#!"
                                        className="text-decoration-none text-light ms-2"> Sign up
                                        now</a>
                                </p>
                                <p className="text-muted mb-5 fs-6">This page is protected by Google reCAPTCHA to ensure
                                    you're
                                    not a
                                    bot.
                                    <a href="!#" className="text-decoration-none text-blue">Learn
                                        more.</a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <Footer />
    </React.Fragment>
  )
}

export default SignIn;