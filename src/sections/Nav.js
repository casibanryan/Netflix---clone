import React from 'react'
// import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../css/styles.css';

function Nav() {
  return (
    <nav className="navbar navbar-light static-top">
        <div className="container">
            <a href="#" className="navbar-brand" >  <img src={ logo } />  </a>
            <a href="#" className="btn btn-primary btn-sm">Sign Out</a>
        </div>
    </nav>

  )
}

export default Nav;