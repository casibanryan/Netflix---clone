import React, {useState, useEffect} from 'react'
import axios from './js/axios';
import countStarRating from './js/starRating';
import './css/Home.css';
import {Helmet} from 'react-helmet';
import slide1 from './assets/img/slide1.png';
import slide3 from './assets/img/slide3.png';
import './Modal.css';


const baseUrl = "https://image.tmdb.org/t/p/original/";

function Home({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    // making request to TMDB
    // every time the row reloads
    useEffect(() => {

        // using async function to make the program fast
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }            
        fetchData();
 
     }, [fetchUrl])    // if [] => dependency is empty means run once when page loads and dont't run again
    
  return (
    <React.Fragment>
        <div className="home__row">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {movies.map((movie) => (
                        <React.Fragment >
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        type="button" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${movie.id}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={ movie.name }/>
                      
                    <div className="modal fade" id={`staticBackdrop${movie.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content bg__dark">
                        <div className="modal-header" style={{ borderBottom:"none"}}>
                            <button type="button" className="btn-close btn-lg bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                            
                    <section className="hero-area" id="home">
                        <div className="container">
                            <div className="hero-area-slider">
                                <div className="row hero-area-slide">
                                    <div className="col-lg-6 col-md-5">
                                        <div className="hero-area-content pb-3">
                                            <img src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`} 
                                               style={{ maxWidth: "100%", height:"auto"}} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7">
                                        <div className="hero-area-content pr-50">
                                            <h1> {movie?.title || movie?.name || movie?.original_name}</h1>
                                            <div className="review">
                                                <div className="author-review">
                                                    {
                                                     countStarRating(movie.vote_count)
                                                    }
                                                </div>
                                                <h4>{movie.vote_count} voters</h4>
                                            </div>  
                                            <p> {movie.overview} </p>
                                            <h3>Cast:</h3>
                                            <div className="slide-cast">
									{/* <div className="single-slide-cast">
										<img src="assets/img/cast/cast1.png" alt="about" />
									</div>
									> */}
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
				<div className="hero-area-thumb">
					<div className="thumb-prev w-100">
						<div className="row hero-area-slide">
							<div className="col-lg-6">
								<div className="hero-area-content">
									<img src={slide3} alt="about" />
								</div>
							</div>
						</div>
					</div>
					<div className="thumb-next w-100">
						<div className="row hero-area-slide">
							<div className="col-lg-6">
								<div className="hero-area-content">
									<img src={slide1} alt="about" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	
                        </div>
                        </div>
                    </div>
                    </div>
                    </React.Fragment>
                    ))}


            </div>
        </div>
                        <Helmet>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

                        </Helmet>
    </React.Fragment>
  )
}

export default Home;