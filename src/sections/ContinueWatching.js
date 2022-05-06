import React from 'react';
import YouTube from 'react-youtube';


function ContinueWatching({title, watchList}) {


    /* The options for the youtube video. */
     const opts = {
          height: '100',
          width: '200',
          controls: "1",
    }

    // // pause the video if clicked
    // const handleClose = () => {
    //     const closeBtn = document.getElementById('close');
    //     if(!closeBtn.clicked) setTrailerUrl('');
    // };

    var trailer = "";
  return (
     <div className={`home__row ${watchList.length == 0 ? "d-none" : "d-block" }`} id="my_list">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {watchList.map((trailerUrl, index) => (
                        <React.Fragment key={index}>
                           <YouTube   
                                     videoId={trailerUrl.movie} 
                                     trailer = {trailerUrl.movie}
                                     opts={opts} 
                                      className="row__poster"
                                      data-bs-toggle="modal" data-bs-target={`#watch${index}`}
                                     />
                            <div className="modal fade" id={`watch${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                              <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content bg__dark">
                                  <div className="modal-header" style={{ borderBottom:"none"}}>
                                    <button type="button" className="btn-close btn-lg bg-danger" 
                                            data-bs-dismiss="modal"
                                            id="continue_close" aria-label="Close"
                                                  
                                            ></button>
                                  </div>
                                  <div className="modal-body">
                                  <YouTube videoId={trailer} opts={opts} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            </React.Fragment>
                     ))}
                      
            </div>
        </div>
  )
}

export default ContinueWatching;