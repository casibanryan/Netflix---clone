import React from 'react'
import logo from '../assets/img/logo.png';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <React.Fragment>

        <header className="masthead" style={{ height:"80vh" }}>
            <nav className="navbar navbar-dark fixed-top">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" >  <img src={ logo } />  </Link>
                        <Link to="/signIn" className="btn btn-primary btn-sm me-5">Sign In</Link>
                    </div>
            </nav>
        <div className="container position-relative" id="heading__title">
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

      <Helmet>
            {/* Bootstrap icons*/}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet"
                    type="text/css" />
     
            {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet"
                    type="text/css" />
           {/* Bootstrap core JS*/}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </Helmet>
    </React.Fragment>
  )
}

export default Header;