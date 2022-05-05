import React from 'react';


function ContinueWatching({watchList}) {
  return (
    <div>
        {watchList.map((value, index) => (
            <p key={index}> {value} </p>
        ))};
    </div>
  )
}

export default ContinueWatching;