import React, { useState } from 'react';
import Quiz from './Quiz';
import QuizResult from './QuizResult';

function QuizContainer(props) {

    const quiz = props.quiz;

    const initialState = {
        questionNum: 1,
        question: quiz[0].question,
        answers: quiz[0].answers,
        correctAnswer: quiz[0].correctAnswer,
        score: 0,
        loadResult: false
    };

    const [ state, setState ] = useState(initialState);

    const handleAnswer = (answer) => {

        if (answer === state.correctAnswer) {
            console.log("test");
            setState(prevState => {
                return {
                    ...prevState,
                    score: prevState.score + 1
                }
            })
        }
        
        if (state.questionNum < quiz.length) {
            setState(prevState => {
                return {
                    ...prevState,
                    questionNum: prevState.questionNum + 1,
                    question: quiz[prevState.questionNum].question,
                    answers: quiz[prevState.questionNum].answers,
                    correctAnswer: quiz[prevState.questionNum].correctAnswer,
                }
            })
        } else {
            loadResult();
        }
    }

    const loadResult = () => {
        setState(prevState => {
            return {
                ...prevState,
                loadResult: true
            }
        })
    }

    if (state.loadResult)
    return(
        <QuizResult state={state} quiz={quiz}/>
    )

    return(
        <Quiz question={state.question} answers={state.answers} handleAnswer={handleAnswer}/>
    )
}

export default QuizContainer;