import React from 'react'

function FrequentlyAsked() {
  return (
    <>
         {/* frequently asked question*/}
    <section className="frequently-asked text-white bg-black" style={{ padding: "3% 25% 3% 25%" }}>
        <div className="container">
            <h1 className="mb-5 text-center">Frequently Asked Questions</h1>
            <div className="accordion accordion-flush mb-5" id="accordionFlushExample">
                <div className="accordion-item text-white">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What is Netflix
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-label="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ backgroundColor:"#303030" }}>
                            <h4 className="my-3">Netflix is a streaming service that offers a wide variety of award-winning
                                TV shows,
                                movies,
                                anime, documentaries, and
                                more on thousands of internet-connected devices.</h4>

                            <h4 className="my-3">You can watch as much as you want, whenever you want without a single
                                commercial – all for
                               
                                one low monthly price.
                                There's always something new to discover and new TV shows and movies are added every
                                week!</h4>
                        </div>
                    </div>
                </div>

                <div className="accordion-item text-white">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How much does Netflix cost?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-label="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ backgroundColor:"#303030" }}>
                            <h4 className="my-3">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming
                                device, all for one fixed monthly fee. Plans
                                range from ₱149 to ₱549 a month. No extra costs, no contracts.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="accordion-item text-white">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Where can I watch?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                        aria-label="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ backgroundColor:"#303030" }}>
                            <h4 className="my-3">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                                at netflix.com from your
                                personal computer or on any internet-connected device that offers the Netflix app,
                                including smart TVs, smartphones,
                                tablets, streaming media players and game consoles.
                            </h4>
                            <h4 className="my-3">
                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
                                downloads to watch while you're
                                on the go and without an internet connection. Take Netflix with you anywhere.
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="accordion-item text-white">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive" aria-expanded="false"
                            aria-controls="flush-collapseFour">
                            What can I watch on Netflix?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-label="flush-headingFive"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ backgroundColor:"#303030" }}>
                            <h4 className="my-3">
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                                award-winning Netflix originals, and
                                more. Watch as much as you want, anytime you want.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="accordion-item text-white">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix" aria-expanded="false"
                            aria-controls="flush-collapseFour">
                            Is Netflix good for kids?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-label="flush-headingSix"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ backgroundColor:"#303030" }}>
                            <h4 className="my-3">
                                The Netflix Kids experience is included in your membership to give parents control while
                                kids enjoy family-friendly TV
                                shows and movies in their own space.
                            </h4>
                            <h4 className="my-3">
                                Kids profiles come with PIN-protected parental controls that let you restrict the
                                maturity rating of content kids can
                                watch and block specific titles you don’t want kids to see.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
             <p className="mb-3 text-center fs-6">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="form-subscribe px-5" id="contactFormFooter" >
                {/* Email address input*/}
                <div className="row">
                    <div className="col px-0">
                        <input className="form-control form-control-lg bdr-0"  id="emailAddressBelow"
                            type="email" placeholder="Email address" required />
                    </div>
                    <div className="col-auto px-0"><button className="btn btn-primary btn-lg disabled bdr-0" id="submitButton" type="submit">
                            Get Started
                            <span className="fa-solid fa-greater-than fw-bold px-2"></span>
                        </button></div>
                </div>
            </form>
        </div>
    </section>
    <hr />
    </>
  )
}

export default FrequentlyAsked;