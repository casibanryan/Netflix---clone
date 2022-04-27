import React from 'react'
import {Helmet} from 'react-helmet';

function Footer() {
  return (
    <>
        {/* Footer*/}
    <footer className="footer bg-black">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                    <ul className="list-inline mb-2">
                        <li className="list-inline-item"><a href="#!">About</a></li>
                        <li className="list-inline-item">⋅</li>
                        <li className="list-inline-item"><a href="#!">Contact</a></li>
                        <li className="list-inline-item">⋅</li>
                        <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                        <li className="list-inline-item">⋅</li>
                        <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                    </ul>
                    <p className="text-muted small mb-4 mb-lg-0">&copy; Resty Ochea 2022. All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item me-4">
                            <a href="#!"><i className="bi-facebook fs-3"></i></a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="#!"><i className="bi-twitter fs-3"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!"><i className="bi-instagram fs-3"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
    <Helmet>

        {/* font awesome*/}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet"
                    type="text/css" />
           {/* Bootstrap core JS*/}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </Helmet>

    </>
  )
}

export default Footer;