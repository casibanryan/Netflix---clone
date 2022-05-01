import React, {useState, useEffect} from 'react'
import axios from './js/axios';
import './css/Home.css';

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
        <div className="row">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {movies.map((movie) => (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        key={movie.id}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={ movie.name } />
                    ))}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Home;