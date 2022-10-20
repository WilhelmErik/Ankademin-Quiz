let monoQuestions = [
    {
        question: "The earth is flat",

        options: {
            opt1: "True",
            opt2: "False"

        },
        answer: "False"
    },
    {
        question: "What is da thingg?",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "The earth is flat",

        options: {
            opt1: "True",
            opt2: "False"

        },
        answer: "True"
    },
    {
        question: "What is da thingg?",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
    {
        question: "The earth is flat",

        options: {
            opt1: "True",
            opt2: "False"

        },
        answer: "False"
    },
    {
        question: "What is da thingg?",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "False"
    },
    {
        question: "The earth is flat",

        options: {
            opt1: "True",
            opt2: "False"

        },
        answer: "True"
    },
    {
        question: "What is da thingg?",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "True"
    },
    {
        question: "Testing",

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
            ${quiz.question}

        `




        quest.append(question);

        let choice = document.createElement("div");
        question.append(choice)






        for (opt in quiz.options) {
            //console.log(quiz.options[opt]);
            let option = quiz.options[opt];

            choice.innerHTML += `


            <label label > ${option}
        <input type="radio" name="Answer${qCounter}"
            id="${option}${qCounter}" value="${option}" checked >
        </label>


        `;
            // quest.append(choice);

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




        // let answer1 = document.getElementsByName("Answer" + counter)
        // //console.log(answer1)
        // console.log("ditt svar : " + answer2.value)
        // console.log("rätt svar är " + quiz.answer)

    })
    counter--
    finalScore.innerHTML = `Your score is : ${score} / ${counter}`;


    if (score < counter * 0.5) {
        console.log("Underkänt")
        console.log(score)
        console.log(counter * 0.5)
        finalScore.style.color = "red";
    } else if (score <= counter * 0.75) {
        console.log("Godkänt")
        console.log(counter * 0.75 + "   wtf")
        finalScore.style.color = "orange";
    } else {
        console.log("Mycket Väl Godkänt")
        finalScore.style.color = "green";
    }


}

showResults.addEventListener("click", () => displayResult(monoQuestions))
