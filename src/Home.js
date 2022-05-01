import React, {useState, useEffect} from 'react'
import axios from './js/axios';
import './css/Home.css';
import {Helmet} from 'react-helmet';

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
                        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        key={movie.id}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={ movie.name }/>
                        </button>
                    ))}


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                    test
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
                        <Helmet>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

                        </Helmet>
    </React.Fragment>
  )
}

export default Home;