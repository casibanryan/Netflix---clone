import React from 'react'
import slide2 from '../../../assets/img/slide2.png'
import slide3 from '../../../assets/img/slide3.png'
import slide1 from '../../../assets/img/slide1.png'
import cast1 from '../../../assets/img/cast/cast1.png';



function HeroArea() {
  return (
    <React.Fragment>	
        <section className="hero-area" id="home">
			<div className="container">
				<div className="hero-area-slider">
					<div className="row hero-area-slide">
						<div className="col-lg-6 col-md-5">
							<div className="hero-area-content">
								<img src={slide2} alt="about" />
							</div>
						</div>
						<div className="col-lg-6 col-md-7">
							<div className="hero-area-content pr-50">
								<h2>The Devil Princess</h2>
								<div className="review">
									<div className="author-review">
										<i className="icofont icofont-star"></i>
										<i className="icofont icofont-star"></i>
										<i className="icofont icofont-star"></i>
										<i className="icofont icofont-star"></i>
										<i className="icofont icofont-star"></i>
									</div>
									<h4>180k voters</h4>
								</div>
								<p>She is a devil princess from the demon world. She grew up sheltered by her parents and doesn't really know how to be evil or any of the common actions,   She is unable to cry due to Keita's accidental first wish, despite needed for him to wish...</p>
								<h3>Cast:</h3>
								<div className="slide-cast">
									<div className="single-slide-cast">
										<img src={cast1} alt="about" />
									</div>
								
									<div className="single-slide-cast text-center">
										5+
									</div>
								</div>
								<div className="slide-trailor">
									<h3>Watch Trailer</h3>
									<a className="theme-btn theme-btn2" href="#"><i className="icofont icofont-play"></i> Tickets</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="thumb-next">
						<div className="row hero-area-slide">
							<div className="col-lg-6">
								<div className="hero-area-content">
									<img src={slide1} alt="about" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero-area-content pr-50">
									<h2>The Deer God</h2>
									<div className="review">
										<div className="author-review">
											<i className="icofont icofont-star"></i>
											<i className="icofont icofont-star"></i>
											<i className="icofont icofont-star"></i>
											<i className="icofont icofont-star"></i>
											<i className="icofont icofont-star"></i>
										</div>
										<h4>180k voters</h4>
									</div>
									<p>She is a devil princess from the demon world. She grew up sheltered by her parents and doesn't really know how to be evil or any of the common actions,   She is unable to cry due to Keita's accidental first wish, despite needed for him to wish...</p>
									<h3>Cast:</h3>
									<div className="slide-cast">
										<div className="single-slide-cast">
											<img src={cast1} alt="about" />
										</div>
										
										<div className="single-slide-cast text-center">
											5+
										</div>
									</div>
									<div className="slide-trailor">
										<h3>Watch Trailer</h3>
										<a className="theme-btn theme-btn2" href="#"><i className="icofont icofont-play"></i> Tickets</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    </React.Fragment>
  )
}

export default HeroArea;