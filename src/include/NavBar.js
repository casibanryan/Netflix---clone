import React from 'react'
import logo from '../assets/img/logo.png';

function NavBar() {
  return (
        <React.Fragment>
             <nav className="navbar navbar-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">
                    <img src={ logo } />
                </a>
                <a className="btn btn-primary btn-sm" href="sign-in.html">Sign In</a>
            </div>
        </nav>
        </React.Fragment>
  )
}

export default NavBar;