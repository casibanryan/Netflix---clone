import React, {useState, useEffect} from 'react'
import axios from '../js/axios';
import requests from '../js/requests';
import '../css/Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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
      height: '800',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    const handleClick = (movie) => {
      // if(trailerUrl) {
      //   setTrailerUrl('');
      // } else {
        console.log(`movie name = ${movie.name} or ${movie.title}`);
        movieTrailer(movie?.name || movie?.title || "")
          .then(url => {
            //get everything after the  ?
            console.log(`URL = ${url}`);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }).catch((error) => console.log(error));
      //}
    };

    const handleClose = (movie) => {
        const closeBtn = document.getElementById('close');
        console.log(closeBtn);
        if(closeBtn.clicked==true) setTrailerUrl('');
    };

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
                            data-bs-target="#staticBackdrop"
                            onClick={() => handleClick(movie)}
                            >
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
                <button type="button" className="btn-close btn-lg bg-danger" 
                        data-bs-dismiss="modal"
                        id="close" aria-label="Close"
                        onClick={() => handleClose(movie)}           
                        ></button>
              </div>
              <div className="modal-body">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
              </div>
            </div>
          </div>
        </div>

    </header>
  )
}

export default Banner;