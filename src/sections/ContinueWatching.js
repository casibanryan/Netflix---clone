import React from 'react';
import YouTube from 'react-youtube';


function ContinueWatching({watchList}) {

    /* The options for the youtube video. */
     const opts = {
      height: '100',
      width: '100',
    }

  return (
     <div className="home__row">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {watchList.map((trailerUrl, index) => (
                        <React.Fragment  key={index}>
                           <YouTube videoId={trailerUrl} opts={opts} className="row__poster" />
                        </React.Fragment>
                     ))}
            </div>
        </div>
  )
}

export default ContinueWatching;