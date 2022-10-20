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
        answer: "opt1"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "opt1"
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
        answer: "opt1"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "opt1"
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
        answer: "opt1"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "opt1"
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
        answer: "opt1"
    },
    {
        question: "Testing",

        options: {
            opt1: "True",
            opt2: "False"
        },
        answer: "opt1"
    },
]

let darkness = false;
let modeSwitch = document.getElementById("darkmode");
let quest = document.getElementById("questions");

//----Darkmode button
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})









function createForm(questions) {
    questions.forEach((quiz) => {


        let question = document.createElement("li");
        question.innerHTML = quiz.question;
        quest.append(question);
        let ul = document.createElement("ul");



        console.log(quiz.question);

        for (opt in quiz.options) {
            console.log(quiz.options[opt]);
            let option = quiz.options[opt];


            ul.innerHTML += ` 
            
            <li>
            <label for="${option}"> ${option} </label>
             <input type="checkbox" name="${option}"
              id="${option}" value="${option}">
            
           </li>
            
            `;
            question.append(ul);

        }
        console.log("Rätt svar är: " + quiz.answer)

    })

}

function displayResult(){
    
}



createForm(monoQuestions);