import React from 'react'
import logo from '../assets/img/logo.png';
import {Helmet} from 'react-helmet';

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

         <Helmet>
            {/* Bootstrap icons*/}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet"
                    type="text/css" />

        {/* font awesome*/}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet"
                    type="text/css" />
        </Helmet>
        </React.Fragment>
       
  )
}

export default NavBar;