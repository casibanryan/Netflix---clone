import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

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
                            <a href="#!"><BsFacebook size={42} /></a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="#!"><BsTwitter size={42} /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!"><BsInstagram size={42} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;