import React, { useState } from 'react';
import Quiz from './Quiz';

function QuizContainer(props) {

    const quiz = props.quiz;

    const initialState = {
        questionNum: 0,
        question: quiz[0].question,
        answers: quiz[0].answers,
        correctAnswer: quiz[0].correctAnswer
    };

    const [ state, setState ] = useState(initialState);

    console.log(state);

    return(
        <Quiz question={state.question} answers={state.answers}/>
    )
}

export default QuizContainer;