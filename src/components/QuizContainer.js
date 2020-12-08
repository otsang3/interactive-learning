import React, { useState } from 'react';
import Quiz from './Quiz';

function QuizContainer(props) {

    const quiz = props.quiz;

    const initialState = {
        questionNum: 0,
        question: quiz[0].question,
        answers: quiz[0].answers,
        correctAnswer: quiz[0].correctAnswer,
        score: 0
    };

    const [ state, setState ] = useState(initialState);

    const handleAnswer = (answer) => {

        if (answer = state.correctAnswer) {
            setState(prevState => {
                return {
                    ...prevState,
                    score: prevState.score + 1
                }
            })
        } 

        setState(prevState => {
            return {
                ...prevState,
                questionNum: prevState.questionNum + 1,
                question: quiz[prevState.questionNum + 1].question,
                answers: quiz[prevState.questionNum + 1].answers,
                correctAnswer: quiz[prevState.questionNum + 1].correctAnswer,
            }
        })
    }

    return(
        <Quiz question={state.question} answers={state.answers} handleAnswer={handleAnswer}/>
    )
}

export default QuizContainer;