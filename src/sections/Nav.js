import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png';


function Nav() {

    const [show, handleShow] = useState([false]);
    useEffect(() => {
      window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
      });

      return () => {
          window.removeEventListener("scroll");
      }
      
    }, [])
    
  return (
    <nav className={`navbar navbar-dark static-top ${show && "bg-dark"}`}>
        <div className="container-fluid">
            <a href="#" className="navbar-brand" >  <img src={ logo } alt="logo" />  </a>
            <a href="#" className="btn btn-primary btn-sm">Sign Out</a>
        </div>
    </nav>

  )
}

export default Nav;