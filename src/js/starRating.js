
import { AiTwotoneStar } from "react-icons/ai";
import React from 'react'

function starRating(props) {
    
    const div = document.createElement('div');
    for(let index = 0; index < (props > 1000) ? 5 : (props > 500 && props <1000) ? 4 : 3; index++) {
        div.appendChild(<AiTwotoneStar />)
    }

    return div;

}

export default starRating;