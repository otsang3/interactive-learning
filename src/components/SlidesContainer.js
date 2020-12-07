import React, { useState } from 'react';
import Slide from './Slide';

function SlidesContainer(props) {

    const initialState = {
        slides: props.slides,
        slideNum: 1
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

    const handleStartQuiz = () => {
        props.loadQuiz()
    }

    return(
        <div>
            <p>{state.slides[state.slideNum - 1]}</p>
            {state.slideNum > 1 &&
            <button onClick={handlePrevSlide}>Previous</button>
            }
            {state.slideNum < state.slides.length &&
            <button onClick={handleNextSlide}>Next</button>
            }
            {state.slideNum === state.slides.length &&
            <button onClick={handleStartQuiz}>Start Quiz</button>
            }
        </div>
    )
}

export default SlidesContainer;