import React from 'react';

function QuizResult(props) {

    return(
        <div>
            You answered {props.state.score} out of {props.quiz.length} questions correctly!
        </div>
    )
}

export default QuizResult;