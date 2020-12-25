export const categories = [ "geography", "science"];

export const topics = {
    geography: {
        imgUrl: '/geography.png',
        subtopics: {
            cities: {
                imgUrl: '/cities.png',
                learningSlides: [
                    "Tokyo is the largest city by land area - 8,547 km squared and by population - 37,393,000.",
                    "Situated at 4,150 meters above sea level, El Alto (Bolivia) is the highest city in the world. The cities name literally means `The Heights` in English",
                    "On the other hand, sitting at 258 meters below sea level, Jericho (Palestine) is the lowest city in the world. "
                ],
                quiz: [{
                    question: "What is the most populated city in the world?",
                    answers: [
                        "Shanghai",
                        "New York City",
                        "Tokyo"
                    ],
                    correctAnswer: "Tokyo"
                },{
                    question: "How many meters does El Alto sit above sea level?",
                    answers: [
                        "3550",
                        "4150",
                        "4550"
                    ],
                    correctAnswer: "4150"
                },{
                    question: "What is the lowest city in the world?",
                    answers: [
                        "Jericho",
                        "El Alto",
                        "Delhi"
                    ],
                    correctAnswer: "Jericho"
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
                    "Chemistry is the science that deals with the composition and properties of substances and various elementary forms of matter. There are three states of matter - solid, liquid and gas.",
                    "Elements are substances that cannot be broken down into further substances. These elements are listed under the Periodic Table. Examples of elements include hydrogen and oxygen.",
                    "Atoms are the smallest unit of matter. They are made up of three particles - neutron, electron and proton"
                ],
                quiz: [{
                    question: "Which of the following is NOT a state of matter?",
                    answers: [
                        "Solid",
                        "Liquid",
                        "Plasma"
                    ],
                    correctAnswer: "Plasma"
                },{
                    question: "The Periodic Table is a list that contains?",
                    answers: [
                        "Atoms",
                        "Elements",
                        "Neutrons"
                    ],
                    correctAnswer: "Elements"
                },{
                    question: "Which of the following is a particle of an atom?",
                    answers: [
                        "Hydrogen",
                        "Neutron",
                        "Oxygen"
                    ],
                    correctAnswer: "Neutron"
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