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
    // <nav className={`navbar navbar-dark p-3 fixed-top ${show && "bg__dark"}`}
    //       style={{ transitionTimingFunction: "ease-in",
    //                 transition: "all 0.5s"    
    //     }}>
    //     <div className="container-fluid">
    //         <a href="#" className="navbar-brand" >  <img src={ logo } alt="logo" />  </a>
    //         <a href="#" className="btn btn-primary btn-sm me-5">Sign Out</a>
    //     </div>
    // </nav>
    <nav class={`navbar navbar-expand-lg navbar-dark px-lg-4 ${show && "bg__dark"} `}
          style={{ transitionTimingFunction: "ease-in",
                   transition: "all 0.5s"    
            }}>
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="d-inline-block align-text-top" src={logo} alt="logo" /> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-5" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold" href="#">Tv Shows</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold" href="#">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  fw-bold" href="#">Recently added</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  fw-bold" href="#">My list</a>
                </li>
            </ul>
            <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">KDS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">DVD</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-bell-fill"></i></a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-primary btn-sm mt-1 ms-2" href="#">Sign Out</a>
                </li>
            </ul>
            </span>
        </div>
    </div>
</nav>


  )
}

export default Nav;