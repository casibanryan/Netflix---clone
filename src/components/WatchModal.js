import React, {useState} from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
    
function WatchModal({target}) {

    const [trailerUrl, setTrailerUrl] = useState("");

     const opts = {
      height: '800',
      width: '100%',
      playerVars: {
        autoplay: 1,
      }
    }

     const handleClick = (movie) => {
        movieTrailer(movie?.name || movie?.title || "")
          .then(url => {
            //get everything after the  ?
            console.log(`URL = ${url}`);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }).catch((error) => console.log(error));
      //}
    };

    // pause the video if clicked
    const handleClose = () => {
        console.log(closeBtn.clicked===true ? "true" : false);
        if(!closeBtn.clicked) setTrailerUrl('');
    };

  return (
     <div className="modal fade" id={`staticBackdrop${target}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg__dark">
              <div className="modal-header" style={{ borderBottom:"none"}}>
                <button type="button" className="btn-close btn-lg bg-danger" 
                        data-bs-dismiss="modal"
                        id="close" aria-label="Close"
                        onClick={() => handleClose()}           
                        ></button>
              </div>
              <div className="modal-body">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
              </div>
            </div>
          </div>
        </div>
  )
}

export default WatchModal;