let monoQuestions = [
    {
        question: "The construction of the Eiffel tower was completed on March 31, 1887",

        options: {
            opt1: "True",
            opt2: "False",
        },
        answer: "False",
        inputType: "radio"
    },
    {
        question: "Lightning is seen before it’s heard because light travels faster than sound.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "Vatican City is a country",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "Melbourne is the capital of Australia",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False",
        inputType: "radio"
    },
    {
        question: "Mount Fuji is the highest mountain in Japan",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "Broccoli contains more vitamin C than lemons.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "The skull is the strongest bone in the human body",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False",
        inputType: "radio"
    },
    {
        question: "Google was initially called BackRub",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "The black box in a plane is black",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False",
        inputType: "radio"
    },
    {
        question: "Tomatoes are fruit",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "Depression is the leading cause of disability worldwide",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True",
        inputType: "radio"
    },
    {
        question: "In Ohio, USA, it is illegal to get a fish drunk",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False",
        inputType: "radio"
    },
    {
        question: "When was theconstruction of the Eiffel tower completed",

        options: {
            opt1: "March 31, 1886",
            opt2: "March 31, 1887",
            opt3: "March 31, 1888",
            opt4: "March 31, 1889"
        },
        answer: "March 31, 1889",
        inputType: "checkbox"
    },
    {
        question: "Which of the following are cities",

        options: {
            opt1: "Stockholm",
            opt2: "Örebro",
            opt3: "Borås",
            opt4: "Malmö"
        },
        answer: "March 31, 1889",
        inputType: "checkbox"
    },
]

let multipleChoice1 = [
    {
        question: "When was theconstruction of the Eiffel tower completed",

        options: {
            opt1: "March 31, 1886",
            opt2: "March 31, 1887",
            opt3: "March 31, 1888",
            opt4: "March 31, 1889"
        },
        answer: "March 31, 1889",
        inputType: "checkbox"
    },

];

let multipleChoice2 = [
    {
        question: "Which of the following are cities",

        options: {
            opt1: "Stockholm",
            opt2: "Örebro",
            opt3: "Borås",
            opt4: "Malmö"
        },
        answer: "March 31, 1889",
        inputType: "checkbox"
    }
];

let darkness = false;
let modeSwitch = document.getElementById("darkmode");
let quest = document.getElementById("questions");

//----Darkmode button
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})

let showResults = document.getElementById("displayResults")
let finalScore = document.getElementById("finalScore");

let questionCounter = 1;
function createForm(questions) {

    questions.forEach((quiz) => {

        let question = document.createElement("div");
        //question.className = "question"
        question.id = "question" + questionCounter;
        question.innerHTML = ` <h4> Question ${questionCounter} </h4 >
           <p> ${quiz.question} </p>`

        quest.append(question);
        let inputType = quiz.inputType;
        let choice = document.createElement("div");
        question.append(choice)

        for (opt in quiz.options) {
            let option = quiz.options[opt];
            choice.innerHTML += `
            <label class="option"> ${option}
        <input type="${inputType}" name="Answer${questionCounter}"
            id="${option}${questionCounter}" value="${option}" checked >
        </label>`;
        }
        questionCounter++;

    })

}

createForm(monoQuestions, "radio");

//createForm(multipleChoice1, "checkbox");

//createForm(multipleChoice2, "checkbox");




function displayResult(questions) {
    let score = 0;
    let counter = 1;
    questions.forEach((quiz) => {

        let userAnswer = document.querySelector("[name=Answer" + counter + "]:checked");
        console.log(userAnswer)
        if (quiz.answer.includes(userAnswer.value)) {
            score++
            console.log("rätt")
            document.getElementById("question" + counter).style.color = "green";
        } else {
            document.getElementById("question" + counter).style.color = "red";
        }

        console.log("ditt svar : " + userAnswer.value)
        console.log("rätt svar är " + quiz.answer + "count" + counter)

        counter++;
    })
    counter--
    finalScore.innerHTML = `Your score is : ${score} / ${counter}`;

    if (score < counter * 0.5) {
        console.log("Underkänt")
        finalScore.style.color = "red";
    } else if (score <= counter * 0.75) {
        console.log("Godkänt")
        finalScore.style.color = "orange";
    } else {
        console.log("Mycket Väl Godkänt")
        finalScore.style.color = "green";
    }

}

showResults.addEventListener("click", () => {
    displayResult(monoQuestions)

})
