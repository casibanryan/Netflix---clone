import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { BsFillBellFill, BsSearch } from "react-icons/bs";


function Nav() {

    const [show, handleShow] = useState([false]);
    useEffect(() => {
      window.addEventListener("scroll", () => {
            if(window.scrollY > 150) {
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
    
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top px-lg-4 ${show && "bg__dark"} `}
          style={{ transitionTimingFunction: "ease-in",
                   transition: "all 0.5s"    
            }}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="d-inline-block align-text-top" src={logo} alt="logo" /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">Tv Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  fw-bold" href="#">Recently added</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  fw-bold" href="#">My list</a>
                </li>
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                <li className="nav-item me-3">
                    <a className="nav-link" href="#"><BsSearch /></a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link" href="#">KDS</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link" href="#">DVD</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link" href="#"><BsFillBellFill /></a>
                </li>
                <li className="nav-item ms-lg-3 ms-md-3 ms-sm-3">
                    <a className="btn btn-primary btn-sm" href="#">Sign Out</a>
                </li>
            </ul>
            </span>
        </div>
    </div>
</nav>


  )
}

export default Nav;