import React, { useState } from 'react';
import { topics } from '../data/Data';
import QuizContainer from './QuizContainer';
import SlidesContainer from './SlidesContainer';

function InteractiveDisplay(props) {

    const initialState = {
        loadQuiz: false
    };

    const [ state, setState ] = useState(initialState);

    const { match: { params: { category }} } = props.category;
    const { match: { params: { topic }} } = props.category;

    const slides = topics[category].subtopics[topic].learningSlides;
    const quiz = topics[category].subtopics[topic].quiz;

    const loadQuiz = () => {
        setState({
            loadQuiz: true
        })
    }

    if (state.loadQuiz) 
    return(
        <QuizContainer quiz={quiz}/>
    )

    return(
        <div>
            <SlidesContainer loadQuiz={loadQuiz} slides={slides}/>
        </div>
        
    )
}

export default InteractiveDisplay;