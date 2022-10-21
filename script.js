let monoQuestions = [
    {
        question: "The construction of the Eiffel tower was completed on March 31, 1887",

        options: {
            opt1: "True",
            opt2: "False",
        },
        answer: "False"
    },
    {
        question: "Lightning is seen before it’s heard because light travels faster than sound.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Vatican City is a country",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Melbourne is the capital of Australia",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
    {
        question: "Mount Fuji is the highest mountain in Japan",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Broccoli contains more vitamin C than lemons.",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "The skull is the strongest bone in the human body",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
    {
        question: "Google was initially called BackRub",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "The black box in a plane is black",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
    {
        question: "Tomatoes are fruit",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Depression is the leading cause of disability worldwide",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "In Ohio, USA, it is illegal to get a fish drunk",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
]

let darkness = false;
let modeSwitch = document.getElementById("darkmode");
let quest = document.getElementById("questions");

//----Darkmode button
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})

let showResults = document.getElementById("displayResults")
let finalScore = document.getElementById("finalScore");

function createForm(questions) {
    let qCounter = 1;
    questions.forEach((quiz) => {

        let question = document.createElement("div");
        question.id = "question" + qCounter;
        question.innerHTML = ` <h4> Question ${qCounter} </h4 >
            ${quiz.question}`

        quest.append(question);

        let choice = document.createElement("div");
        question.append(choice)

        for (opt in quiz.options) {
            let option = quiz.options[opt];
            choice.innerHTML += `
            <label label > ${option}
        <input type="radio" name="Answer${qCounter}"
            id="${option}${qCounter}" value="${option}" checked >
        </label>`;
        }
        qCounter++;

    })

}

createForm(monoQuestions);

function displayResult(questions) {
    let counter = 1;
    let score = 0;
    questions.forEach((quiz) => {

        let userAnswer = document.querySelector("[name=Answer" + counter + "]:checked");

        if (userAnswer.value === quiz.answer) {
            score++
            console.log("rätt")
            document.getElementById("question" + counter).style.color = "green";
        } else {
            document.getElementById("question" + counter).style.color = "red";
        }

        console.log("ditt svar : " + userAnswer.value)
        console.log("rätt svar är " + quiz.answer)

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

showResults.addEventListener("click", () => displayResult(monoQuestions))
