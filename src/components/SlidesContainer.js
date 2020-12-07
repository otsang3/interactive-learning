import React, { useState } from 'react';
import Slide from './Slide';

function SlidesContainer(props) {

    const initialState = {
        slides: props.slides,
        slideNum: 0
    };

    const [ state, setState ] = useState(initialState);

    console.log(state.slides[state.slideNum]);

    return(
        <div>
            {state.slides[state.slideNum]}
        </div>
    )
}

export default SlidesContainer;