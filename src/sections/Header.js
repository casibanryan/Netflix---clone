import React from 'react'

function Header() {
  return (
    <React.Fragment>
        <header className="masthead" style={{ height:"80vh" }}>
        <div className="container position-relative">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center text-white">
                        {/* Page heading*/}
                        <h1 className="mb-3">Unlimited movies, TV shows, and more.</h1>
                        <h3 className="mb-3">Watch anywhere. Cancel anytime.</h3>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="form-subscribe" id="contactForm" data-sb-form-api-token="5a9cf8aa-efe0-4f12-aa41-ff4257b5ca15">
                            {/* Email address input*/}
                            <div className="row">
                                <div className="col px-0">
                                    <input className="form-control form-control-lg bdr-0" 
                                        id="emailAddress" type="email" placeholder="Email Address"
                                        data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                                        Email Address is required.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email
                                        Address Email is not valid.</div>
                                </div>
                                <div className="col-auto px-0"><button
                                        className="btn btn-primary btn-lg bdr-0 disabled"
                                        id="submitButton" type="submit">Get
                                        Started <span className="fa-solid fa-greater-than fw-bold px-2"></span>
                                    </button></div>
                            </div>
                        
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center my-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </React.Fragment>
  )
}

export default Header