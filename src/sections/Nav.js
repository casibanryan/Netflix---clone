import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-light static-top">
        <div className="container">
            <Link to="/home" className="navbar-brand" >  <img src={ logo } />  </Link>
            <Link to="/signOut" className="btn btn-primary btn-sm">Sign Out</Link>
        </div>
    </nav>

  )
}

export default Nav;