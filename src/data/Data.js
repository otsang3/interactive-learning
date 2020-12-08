export const categories = [ "animals", "geography", "science"];

export const topics = {
    animals: {
        imgUrl: '/animals.png',
        subtopics: {
            land: {
                imgUrl: '/land-animals.png',
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
                imgUrl: '/sea-animals.png',
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
                imgUrl: '/cities.png',
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
                imgUrl: '/countries.png',
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
                imgUrl: '/chemistry.png',
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
                imgUrl: '/physics.webp',
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