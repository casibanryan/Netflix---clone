
import { AiTwotoneStar } from "react-icons/ai";
import React from 'react'

function starRating(props) {
    
    if(props > 1000) {
    return (
        <>
          <AiTwotoneStar />
          <AiTwotoneStar />
            <AiTwotoneStar />
              <AiTwotoneStar />
                <AiTwotoneStar />
        </>
  )
    }

    else {
         <>
          <AiTwotoneStar />
        </>
    }
}

export default starRating;