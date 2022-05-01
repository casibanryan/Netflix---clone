
import { AiTwotoneStar } from "react-icons/ai";
import React from 'react'

function starRating(props) {
    
    const author_review = document.getElementByClassName('author-review');
    for(let index = 0; index < (props > 1000) ? 5 : (props > 500 && props <1000) ? 4 : 3; index++) {
        author_review.appendChild(<AiTwotoneStar />)
    }

    return author_review;

}

export default starRating;