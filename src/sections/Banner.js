import React, {useState, useEffect} from 'react'
import axios from '../js/axios';
import requests from '../js/requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData() {

        const request = await axios.get(requests.fetchTrending);
        // getting 1 (random) movie only in trending section
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        return request;
           
      }
      fetchData();
    }, [])
    
    console.log(movie);

  return (
    <header className="banner" 
            style={{ backgroundSize: "cover",
                     backgroundImage: `url(
                         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                     )`,
                     backgroundPosition: "center center", 
            }}>

        <div className="banner__contains">
               {/* title */}
               <h1>
                   {movie.title || movie?.name || movie?.original_name}
               </h1>
        </div>
     
        {/* 2 buttons */}
        {/* description */}
    </header>
  )
}

export default Banner;