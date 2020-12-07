export const categories = [ "animals", "geography", "science"];

export const topics = {
    animals: {
        imgUrl: '/animals.png',
        subtopics: {
            land: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            },
            sea: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            }
        } 
    },
    geography: {
        imgUrl: '/geography.png',
        subtopics: {
            cities: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            },
            countries: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            }
        }
    },
    science: {
        imgUrl: '/science.png',
        subtopics: {
            chemistry: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            },
            physics: {
                learningSlides: [
                    "slide 1",
                    "slide 2",
                    "slide 3"
                ],
                quiz: [{
                    question: "what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }]
            }
        }
    },
}