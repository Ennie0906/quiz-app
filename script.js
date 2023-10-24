const questions = [{
        question: "What color is the sky?",
        answers: [{
                text: "Blue",
                correct: true
            },
            {
                text: "Green",
                correct: false
            },
            {
                text: "Red",
                correct: false
            },
            {
                text: "Yellow",
                correct: false
            },
        ]
    },
    {
        question: "What is the fastest car in the world?",
        answers: [{
                text: "Bugatti Veyron Super Sport",
                correct: true
            },
            {
                text: "Koenigsegg Jesko Absolut",
                correct: false
            },
            {
                text: "Hennessey Venom F5",
                correct: false
            },
            {
                text: "Mclaren P1",
                correct: false
            },
        ]

    },
    {
        question: "Who won 2010 FIFA World Cup?",
        answers: [{
                text: "Spain",
                correct: true
            },
            {
                text: "Brazil",
                correct: false
            },
            {
                text: "England",
                correct: false
            },
            {
                text: "West Ham United",
                correct: false
            },
        ]

    },

    {
        question: "Who would win in a fight between Richey and Enes?",
        answers: [{
                text: "Enes",
                correct: true
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
        ]
    },
    {
        question: "Who is the better cook between Richey and Enes?",
        answers: [{
                text: "Enes",
                correct: true
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
        ]
    },
    {
        question: "If Richey was 60 years old and Enes was 5 years old who would win a MMA Cage Fight?",
        answers: [{
                text: "Enes",
                correct: true
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
            {
                text: "Richey",
                correct: false
            },
        ]

    }
];



const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


startQuiz();