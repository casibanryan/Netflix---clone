import React, {useState} from 'react';
import YouTube from 'react-youtube';


function ContinueWatching({title, watchList}) {


    /* The options for the youtube video. */
     const opts = {
          height: '100',
          width: '200',
          controls: "1",
    }

    const [trailer, setTrailer] = useState[""];

      const handleTrailer = (movie) => {
          // pause the movie if the user clicks another video
          movie ? setTrailer('') : setTrailer(movie)
      }
                
  return (
     <div className={`home__row ${watchList.length == 0 ? "d-none" : "d-block" }`} id="my_list">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {watchList.map((trailerUrl, i) => (
                        <React.Fragment>
                           <YouTube  key={i}
                                     videoId={trailerUrl.movie} 
                                     opts={opts} 
                                     className="row__poster"
                                     onCLick={() => handleTrailer(watchList)}
                                     />
                          </React.Fragment>
                     ))}
                      
            </div>
        </div>
  )
}

export default ContinueWatching;