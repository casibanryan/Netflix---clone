import React from "react";
import frequentlyAskedData from "../js/frequentlyAskedData";

function FrequentlyAsked() {
  return (
    <>
      {/* frequently asked question*/}
      <section
        className="frequently-asked text-white bg-black"
        style={{ padding: "3% 25% 3% 25%" }}
      >
        <div className="container">
          <h1 className="mb-5 text-center">Frequently Asked Questions</h1>
          <div
            className="accordion accordion-flush mb-5"
            id="accordionFlushExample"
          >
            {/* mapping the frequently asked data */}
            {frequentlyAskedData.map((data, index) => (
              <div className="accordion-item text-white" key={index}>
                <h2
                  className="accordion-header"
                  id={`flush-heading${index + 1} `}
                >
                  <button
                    className="accordion-button collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index + 1}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index + 1}`}
                  >
                    {data.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index + 1}`}
                  className="accordion-collapse collapse"
                  aria-label={`flush-heading${index + 1} `}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#303030" }}
                  >
                    <h4 className="my-3">{data.answer}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-3 text-center fs-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="form-subscribe px-lg-5" id="contactFormFooter">
            {/* Email address input*/}
            <div className="row">
              <div className="col px-0">
                <input
                  className="form-control form-control-lg bdr-0"
                  id="emailAddressBelow"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="col-auto px-0">
                <button
                  className="btn btn-primary btn-lg bdr-0"
                  id="submitButton"
                  type="submit"
                >
                  Get Started
                  <span className="fa-solid fa-greater-than fw-bold px-2"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <hr />
    </>
  );
}

export default FrequentlyAsked;
