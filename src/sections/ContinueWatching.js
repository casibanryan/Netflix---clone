import React from 'react';
import watchList from '../js/watchList';


function ContinueWatching() {

    const data = watchList;
  return (
    <div>
        
        {data.map((value, index) => (
            <p key={index}> {value} </p>
        ))};
    </div>
  )
}

export default ContinueWatching;