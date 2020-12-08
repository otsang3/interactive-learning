import React from 'react';

function Quiz(props) {

    const renderAnswers = () => {

        const answersArr = [];

        props.answers.map((answer, index) => {
            answersArr.push(
                <div>
                    <input type="radio" name="answer"/>
                    <label>{answer}</label>
                </div>
            )
        })

        return answersArr;
    }

    return(
        <div>
            {props.question}
            {renderAnswers()}
        </div>
    )
}

export default Quiz;