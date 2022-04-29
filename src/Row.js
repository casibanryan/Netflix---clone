import React, {useState, useEffect} from 'react'
import axiosInstance from './js/axios';


function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    // making request to TMDB
    // every time the row reloads
    useEffect(() => {

        // using async function to make the program fast
        async function fetchData() {
            const request = await axiosInstance.get(fetchUrl);
            console.log(request);
            return request;
        }            
        fetchData();
 
     }, [])    // if [] => dependency is empty means run once when page loads and dont't run again
    
  return (
    <React.Fragment>
        {/* title */}

        <h1> {title} </h1>

        {/* container */}

    </React.Fragment>
  )
}

export default Row;