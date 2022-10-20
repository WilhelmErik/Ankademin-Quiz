let theQuestions = [
    {
        question: "What is The thing?",
        option1: "Something",
        option2: "Else"
    },
    {
        question: "What is da thingg?",

        options: {
            opt1: "idk",
            opt2: "okey",
            opt3: "rofl",
            op4: "kek"
        },
        answer: "opt1"
    },
    {
        question: "Testing",

        options: {
            opt1: "idk",
            opt2: "okey",
            opt3: "rofl",
            op4: "kek"
        },
        answer: "opt1"
    }
]

let darkness = false;

let modeSwitch = document.getElementById("darkmode");


//----Darkmode button
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})




console.log(Object.keys(theQuestions[1]))

theQuestions.forEach((quiz) => {
    console.log(quiz.question);
    for (opt in quiz.options) {
        console.log(opt);
    }
    console.log("Rätt svar är: " + quiz.answer)

})