let someQuestions = [
    {
        question: "The construction of the Eiffel tower was completed on March 31, 1887",

        options: {
            opt1: "True",
            opt2: "False",
        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: "Lightning is seen before it’s heard because light travels faster than sound.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "Vatican City is a country",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "What is the Capital of Australia",

        options: {
            opt1: "Perth",
            opt2: "Melbourne",
            opt3: "Canberra",
            opt4: "Sydney"
        },
        answer: ["Canberra"],
        inputType: "radio"
    },
    {
        question: "Mount Fuji is the highest mountain in Japan",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "Broccoli contains more vitamin C than lemons.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "The skull is the strongest bone in the human body",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: "Which of the following are cities in New Zealand",

        options: {
            opt1: "Auckland",
            opt2: "Wollongong",
            opt3: "Launceston",
            opt4: "Dunedin"
        },
        answer: ["Auckland", "Dunedin"],
        inputType: "checkbox"
    },
    {
        question: "Google was initially called BackRub",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "The black box in a plane is black",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: "Tomatoes are fruit",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "Depression is the leading cause of disability worldwide",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: "In Ohio, USA, it is illegal to get a fish drunk",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: "When was the construction of the Eiffel tower completed",

        options: {
            opt1: "March 31, 1886",
            opt2: "March 31, 1887",
            opt3: "March 31, 1888",
            opt4: "March 31, 1889"
        },
        answer: ["March 31, 1889"],
        inputType: "radio"
    },
    {
        question: "Which of the following are cities",

        options: {
            opt1: "Stockholm",
            opt2: "Örebro",
            opt3: "Borås",
            opt4: "Malmö"
        },
        answer: ["Stockholm", "Örebro", "Malmö"],
        inputType: "checkbox"
    },
]


let darkness = false;
let modeSwitch = document.getElementById("darkmode");
let quest = document.getElementById("questions");

//----Darkmode button
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})
//------------

let showResults = document.getElementById("displayResults")
let finalScore = document.getElementById("finalScore");

function compareAnswers(checked, answers) {
    if (checked.length === answers.length) {
        return checked.every((element) => {
            if (answers.includes(element)) {
                return true;
            }
            return false;
        })
    }
    return false;
}

let questionCounter = 1; //Keeps track on what question to print out 

function createForm(questions) {

    questions.forEach((quiz) => {

        let question = document.createElement("div");
        //question.className = "question"
        question.id = "question" + questionCounter;
        question.className = "question"
        question.innerHTML = ` <h4> Question ${questionCounter} </h4 >
           <p> ${quiz.question} </p>`

        quest.append(question);
        let inputType = quiz.inputType;
        let choice = document.createElement("div");
        choice.className = "options"
        question.append(choice)

        for (opt in quiz.options) {
            let option = quiz.options[opt];
            choice.innerHTML += `
            <label class="option"> ${option}
        <input type="${inputType}" name="Answer${questionCounter}"
            id="${option}${questionCounter}" value="${option}"  >
        </label>`;
        }
        questionCounter++;
    })
}

createForm(someQuestions, "radio");
function displayResult(questions) {
    let score = 0;
    let counter = 1;
    questions.forEach((quiz) => {

        let userAnswer = document.querySelectorAll("[name=Answer" + counter + "]:checked");
        let answerList = [];
        userAnswer.forEach((answer) => {
            answerList.push(answer.value);
        })
        console.log(answerList)
        let isCorrect = compareAnswers(answerList, quiz.answer)
        console.log(isCorrect)

        if (isCorrect) {
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
    displayResult(someQuestions)

})
