import React, { useState } from 'react';
import Slide from './Slide';

function SlidesContainer(props) {

    const initialState = {
        slides: props.slides,
        slideNum: 0
    };

    const [ state, setState ] = useState(initialState);

    const handleNextSlide = () => {
        setState(prevState => {
            return {
                ...prevState,
                slideNum: prevState.slideNum + 1
            }
        })
    }

    const handlePrevSlide = () => {
        setState(prevState => {
            return {
                ...prevState,
                slideNum: prevState.slideNum - 1
            }
        })
    }

    return(
        <div>
            {state.slides[state.slideNum]}
            <button onClick={handlePrevSlide}>Previous</button>
            <button onClick={handleNextSlide}>Next</button>
        </div>
    )
}

export default SlidesContainer;