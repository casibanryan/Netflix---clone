import React, {useState, useEffect} from 'react'
import axios from './js/axios';
import './css/Row';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    // making request to TMDB
    // every time the row reloads
    useEffect(() => {

        // using async function to make the program fast
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }            
        fetchData();
 
     }, [fetchUrl])    // if [] => dependency is empty means run once when page loads and dont't run again
    
  return (
    <React.Fragment>

        <div className="row">
              {/* title */}
            <h1> {title} </h1>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {movies.map((movie) => (
                        <img className="row__poster" src={`${baseUrl}${movie.poster_path}`} alt={ movie.name } />
                    ))}
            </div>
        </div>

    </React.Fragment>
  )
}

export default Row;