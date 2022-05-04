import React, {useState, useEffect} from 'react'
import axios from '../js/axios';
import requests from '../js/requests';
import '../css/Banner.css';
import YouTube from 'react-youtube';



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

     const opts = {
      height: '1000px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
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
               <h1 className="banner__title mt-5">
                   {movie?.title || movie?.name || movie?.original_name}
               </h1>
                {/* 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button" 
                            type="button" data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop">
                              Play
                    </button>
                      <button className="banner__button">My List</button>
                </div>

                    {/* description */}
                <h1 className="banner__description"> { truncate(movie?.overview, 150) } </h1>
        </div>
        <div className="banner__fadeBottom"></div>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content bg__dark">
      <div className="modal-header" style={{ borderBottom:"none"}}>
        <button type="button" className="btn-close btn-lg bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </div>
    </div>
  </div>
</div>

    </header>
  )
}

export default Banner;