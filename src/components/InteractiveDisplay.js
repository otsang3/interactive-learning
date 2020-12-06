import React from 'react';
import SlideContainer from './SlideContainer';

function InteractiveDisplay(props) {

    const { match: { params: { category }} } = props.category
    const { match: { params: { topic }} } = props.category

    return(
        <div>
            
        </div>
    )
}

export default InteractiveDisplay;