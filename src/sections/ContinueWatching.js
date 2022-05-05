import React,  {useState,useEffect, useCallback}  from 'react';
import YouTube from 'react-youtube';
import data from './js/watchList';

function ContinueWatching({title}) {

    const [watchList, setWatchList] = useState([]);

//    const fetchList = useCallback(() => {
//        fetch('../js/watchList.js')
//        .then(response => response.json())
//        .then(data => {
//            console.log(data);
//          setWatchList(data);
//        })
//      },
//      [],    
//    )
   
   useEffect(() => {
        setWatchList(data);
   })   
   

   console.log(watchList);

    /* The options for the youtube video. */
     const opts = {
      height: '100',
      width: '200',
    }

  return (
     <div className={`home__row ${watchList.length == 0 ? "d-none" : "d-block" }`}>
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
                                     style={{ width: 0 }}
                                     />
                     ))}
            </div>
        </div>
  )
}

export default ContinueWatching;