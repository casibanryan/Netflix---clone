import React from 'react';
import YouTube from 'react-youtube';


function ContinueWatching({title, watchList}) {


    /* The options for the youtube video. */
     const opts = {
          height: '100',
          width: '200',
          controls: "1",
          origin: 'http://localhost:3000/home' 
    }

  return (
     <div className={`home__row ${watchList.length == 0 ? "d-none" : "d-block" }`} id="my_list">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {watchList.map((trailerUrl, index) => (
                           <YouTube  key={index} 
                                     videoId={trailerUrl.movie} 
                                     opts={opts} 
                                      className="row__poster"

                                     />
                     ))}
            </div>
        </div>
  )
}

export default ContinueWatching;