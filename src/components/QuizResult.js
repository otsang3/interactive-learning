import React from 'react';

function QuizResult(props) {

    const renderMessage = () => {

        const userScore = (props.state.score/props.quiz.length);
        let message = '';

        switch(true) {
            case (userScore < 0.40):
                message = 'Better luck next time!'
                break;
            case (userScore < 0.60):
                message = 'Well done!'
                break;
            default:
                message = "Excellent work!"
                break;
        }

        return message;
        
    }

    return(
        <div className="result-container">
            <h4>{renderMessage()}</h4>
        </div>
    )
}

export default QuizResult;