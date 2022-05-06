import React from 'react';
import YouTube from 'react-youtube';
import screenfull from "screenfull";  
import DeviceDetector from "device-detector-js"; 
import { makeStyles } from "@material-ui/core/styles"; 

function ContinueWatching({title, watchList}) {

/* Checking if the user is using a mobile browser. */
  const dd = new DeviceDetector();  
  const mobile = dd.usesMobileBrowser();

 /**
  * The function takes an event as an argument and then uses the event to get the iframe element. If
  * the screenfull library is enabled, the function requests the iframe to go fullscreen.
  */
  const fullScreen = event => {  
      var iframe = event.target.getIframe();  
      if (screenfull.isEnabled) {  
        screenfull.request(iframe);  
   }  
  };  

    /* The options for the youtube video. */
     const opts = {
          height: '100',
          width: '200',
          controls: "1",
           'origin': 'http://localhost:3000' 
    }

    const useStyles = makeStyles({  
        videoDiv: {  
          width: "100%",  
          height: "100%"  
        }  
    });  

     const classes = useStyles();  

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
                                      className={`row__poster ${classes.videoDiv}`}
                                      onPlay={() => (mobile ? fullScreen : {})}  

                                     />
                     ))}
            </div>
        </div>
  )
}

export default ContinueWatching;