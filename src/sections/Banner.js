import React, {useState, useEffect} from 'react'
import axios from '../js/axios';
import requests from '../js/requests';
import '../css/Banner.css';

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
    
    // minimize the text in small screen (responsive)
    function truncate(str, n) {
            return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className="banner mb-3" 
            style={{ backgroundSize: "cover",
                     backgroundImage: `url(
                         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                     )`,
                     backgroundPosition: "center center", 
            }}>

        <div className="banner__contains">
               {/* title */}
               <h1 className="banner__title mt-lg-5 mt-md-5">
                   {movie?.title || movie?.name || movie?.original_name}
               </h1>
                {/* 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                      <button className="banner__button">My List</button>
                </div>

                    {/* description */}
                <h1 className="banner__description"> { truncate(movie?.overview, 150) } </h1>
        </div>
        <div className="banner__fadeBottom"></div>
    </header>
  )
}

export default Banner;