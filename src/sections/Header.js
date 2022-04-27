import React from 'react'
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <React.Fragment>

        <header className="masthead" style={{ height:"80vh" }}>
            <nav className="navbar navbar-light static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#!">
                            <img src={ logo } />
                        </a>
                        <a className="btn btn-primary btn-sm" href="sign-in.html">Sign In</a>
                    </div>
                </nav>
        <div className="container position-relative">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center text-white">
                        {/* Page heading*/}
                        <h1 className="mb-3">Unlimited movies, TV shows, and more.</h1>
                        <h3 className="mb-3">Watch anywhere. Cancel anytime.</h3>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="form-subscribe" id="contactForm" >
                            {/* Email address input*/}
                            <div className="row">
                                <div className="col px-0">
                                    <input className="form-control form-control-lg bdr-0" 
                                        id="emailAddress" type="email" placeholder="Email Address"
                                       required />
                                </div>
                                <div className="col-auto px-0"><button
                                        className="btn btn-primary btn-lg bdr-0 disabled"
                                        id="submitButton" type="submit">Get
                                        Started <span className="fa-solid fa-greater-than fw-bold px-2"></span>
                                    </button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </React.Fragment>
  )
}

export default Header;