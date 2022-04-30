import React from 'react'
import video1 from '../../../assets/img/video/video1.png';
import video2 from '../../../assets/img/video/video2.png';
import video3 from '../../../assets/img/video/video3.png';
import video4 from '../../../assets/img/video/video4.png';
import video5 from '../../../assets/img/video/video5.png';
import portfolio1 from '../../../assets/img/portfolio/portfolio1.png';
import portfolio2 from '../../../assets/img/portfolio/portfolio2.png';
import portfolio3 from '../../../assets/img/portfolio/portfolio3.png';
import portfolio4 from '../../../assets/img/portfolio/portfolio4.png';
import portfolio5 from '../../../assets/img/portfolio/portfolio5.png';
import portfolio6 from '../../../assets/img/portfolio/portfolio6.png';
import sidebar1 from '../../../assets/img/sidebar/sidebar1.png';
import sidebar2 from '../../../assets/img/sidebar/sidebar2.png';
import sidebar3 from '../../../assets/img/sidebar/sidebar3.png';
import sidebar4 from '../../../assets/img/sidebar/sidebar4.png';


function Movie() {
  return (
    <>
		<section className="portfolio-area pt-60">
			<div className="container">
				<div className="row flexbox-center">
					<div className="col-lg-6 text-center text-lg-left">
					    <div className="section-title">
							<h1><i className="icofont icofont-movie"></i> Spotlight This Month</h1>
						</div>
					</div>
					<div className="col-lg-6 text-center text-lg-right">
					    <div className="portfolio-menu">
							<ul>
								<li data-filter="*" className="active">Latest</li>
								<li data-filter=".soon">Coming Soon</li>
								<li data-filter=".top">Trending Now</li>
								<li data-filter=".released">Recently Released</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-lg-9">
						<div className="row portfolio-item">
							<div className="col-md-4 col-sm-6 soon released">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio1} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>Boyz II Men</h2>
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
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 top">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio2} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>Tale of Revemge</h2>
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
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 soon">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio3} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>The Lost City of Z</h2>
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
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 top released">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio4} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>Beast Beauty</h2>
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
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 released">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio5} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>In The Fade</h2>
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
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 soon top">
								<div className="single-portfolio">
									<div className="single-portfolio-img">
										<img src={portfolio6} alt="portfolio" />
										<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
											<i className="icofont icofont-ui-play"></i>
										</a>
									</div>
									<div className="portfolio-content">
										<h2>Last Hero</h2>
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
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 text-center text-lg-left">
					    <div className="portfolio-sidebar">
							<img src={sidebar1} alt="sidebar" />
                            <img src={sidebar2} alt="sidebar" />
                            <img src={sidebar3} alt="sidebar" />
                            <img src={sidebar4} alt="sidebar" />
							
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="video ptb-90">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
					    <div className="section-title pb-20">
							<h1><i className="icofont icofont-film"></i> Continue Watching</h1>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
                    <div className="col-md-9">
						<div className="video-area">
							<img src={video1} alt="video" />
							<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
								<i className="icofont icofont-ui-play"></i>
							</a>
							<div className="video-text">
								<h2>Angle of Death</h2>
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
							</div>
						</div>
                    </div>
                    <div className="col-md-3">
						<div className="row">
							<div className="col-md-12 col-sm-6">
								<div className="video-area">
										<img src={video2} alt="video" />
									<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
										<i className="icofont icofont-ui-play"></i>
									</a>
								</div>
							</div>
							<div className="col-md-12 col-sm-6">
								<div className="video-area">
									<img src={video3} alt="video" />
									<a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
										<i className="icofont icofont-ui-play"></i>
									</a>
								</div>
							</div>
						</div>
                    </div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Movie