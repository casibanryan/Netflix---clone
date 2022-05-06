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
                    {watchList.map((trailerUrl, i) => (
                        <React.Fragment key={i}>
                           <YouTube   
                                     videoId={trailerUrl.movie} 
                                     trailer = {trailerUrl.movie}
                                     opts={opts} 
                                      className="row__poster"
                                       
                                     />
                           
                            </React.Fragment>
                     ))}
                      
            </div>
        </div>
  )
}

export default ContinueWatching;