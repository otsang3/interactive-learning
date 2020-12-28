import React from 'react';

function Quiz(props) {

    const renderAnswers = () => {

        const answersArr = [];

        props.answers.map((answer, index) => {
            answersArr.push(
                <div key={index}>
                    <input type="radio" name="answer" checked="" value={answer}/>
                    <label>{answer}</label>
                </div>
            )
        })

        return answersArr;
    }

    const handleChange = (event) => {
        props.handleAnswer(event.target.value)
    };

    return(
        <div className="quiz-container">
            <h4>{props.question}</h4>
            <form onChange={handleChange}>
                {renderAnswers()}
            </form>
            
        </div>
    )
}

export default Quiz;