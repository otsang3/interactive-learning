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
                    question: "1. what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 1"
                }, {
                    question: "2. what is the question?",
                    answers: [
                        "answer 1",
                        "answer 2",
                        "answer 3"
                    ],
                    correctAnswer: "answer 2"
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
                    "There are 195 countries in the world. These countries are split into areas called continents. There are seven continents - Africa, Antartica, Asia, Australia, Europe, North America and South America.",
                    "The vast majority of countries have a capital city. For example, the capital city of France is Paris."
                ],
                quiz: [{
                    question: "How many countries are there in the world?",
                    answers: [
                        "190",
                        "195",
                        "200"
                    ],
                    correctAnswer: "195"
                },{
                    question: "Countries are grouped together in regions. What are these regions called?",
                    answers: [
                        "Capitals",
                        "Cities",
                        "Continents"
                    ],
                    correctAnswer: "Continents"
                },{
                    question: "What is the capital of France?",
                    answers: [
                        "London",
                        "Paris",
                        "Madrid"
                    ],
                    correctAnswer: "Paris"
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