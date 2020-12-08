import React, { useState } from 'react';

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
        <div>

        </div>
    )
}

export default QuizContainer;