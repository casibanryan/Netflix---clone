import React from 'react';
import YouTube from 'react-youtube';


function ContinueWatching({title, watchList}) {

    /* The options for the youtube video. */
     const opts = {
      height: '100',
      width: '200',
    }

  return (
     <div className={`home__row ${watchList.length == 0 ? "d-none" : ''}`}>
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {watchList.map((trailerUrl, index) => (
                           <YouTube  key={index} 
                                     videoId={trailerUrl} 
                                     opts={opts} 
                                     className="row__poster"
                                     stye={{ width:"none" }}
                                     />
                     ))}
            </div>
        </div>
  )
}

export default ContinueWatching;