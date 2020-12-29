import React from 'react';
import { Link } from 'react-router-dom';

function QuizResult(props) {

    const score = props.state.score;
    const totalQuestions = props.quiz.length;

    const renderMessage = () => {

        const userScore = (score/totalQuestions);
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

    const refreshPage = () => {
        window.location.reload();
    }

    const linkStyle = {
        color: "orange",
        fontSize: '0.80em',
        textDecoration: 'inherit',
    }

    return(
        <div className="result-container">
            <h4>{renderMessage()}</h4>
            <p>You answered {score} out of {totalQuestions} questions correctly!</p>
            <div className="quiz-result-options">
                <p className="quiz-retake" onClick={refreshPage}>Retake topic</p>
                <Link to="/" style={linkStyle}><p>Return to homepage</p></Link>
            </div>
            
        </div>
    )
}

export default QuizResult;