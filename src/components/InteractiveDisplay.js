import React, { useState } from 'react';
import { topics } from '../data/Data';
import SlidesContainer from './SlidesContainer';

function InteractiveDisplay(props) {

    const initialState = {
        loadQuiz: false,
        loadSlides: true
    };

    const [ state, setState ] = useState(initialState);

    const { match: { params: { category }} } = props.category;
    const { match: { params: { topic }} } = props.category;

    const slides = topics[category][topic].learningSlides;
    const quiz = topics[category][topic].quiz;

    if (state.loadQuiz) 
    return(
        <p>Quiz loaded</p>
    )

    return(
        <div>
            <SlidesContainer slides={slides}/>
        </div>
        
    )
}

export default InteractiveDisplay;