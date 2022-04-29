import React, {useState, useEffect} from 'react'
import axios from './js/axios';


const baseUrl = "https://image.tmdb.org/t/p/original";

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
        {/* title */}

        <h1> {title} </h1>

        {/* container */}
        <div className="container">
            testing
          
                {movies.map((movie) => {
                    <img src={`${baseUrl}${movie.poster_path}`} alt={ movie.name } />
                })}
           
        </div>

    </React.Fragment>
  )
}

export default Row;