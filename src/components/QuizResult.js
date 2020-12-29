import React from 'react';

function QuizResult(props) {

    return(
        <div className="result-container">
            <h4>You answered {props.state.score} out of {props.quiz.length} questions correctly!</h4>
            
        </div>
    )
}

export default QuizResult;