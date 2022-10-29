const miscQuestions = [
    {
        question: "Which of the following are decent cities",

        options: {
            opt1: "Stockholm",
            opt2: "Örebro",
            opt3: "Borås",
            opt4: "Malmö"
        },
        answer: ["Stockholm", "Örebro", "Malmö"],
        inputType: "checkbox"
    },
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
]

//------------------------------------------------------------------
const historyQuestions = [
    {
        question: 'Columbus was the first European to sail to the Americas',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: 'Gunpowder was invented in China ',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'Egypt, Jordan, and Syria have all invaded Israel ',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'The Incan Empire lasted for over 2,000 years',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: ' The saxophone was invented by Adolphe Sax',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'Most scholars now believe that Shakespeare did not write most of the plays that bear his name ',


        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: 'Neil Armstrong becomes the first person to walk on the moon ',

        options: {
            opt1: "1969",
            opt2: "1973",
            opt3: "1981",
            opt4: "1977"
        },
        answer: ["1969"],
        inputType: "checkbox"
    },
    {
        question: 'Columbus "discovers" America',

        options: {
            opt1: "1201",
            opt2: "1699",
            opt3: "1492",
            opt4: "1399"
        },
        answer: ["1492"],
        inputType: "checkbox"
    },
    {
        question: 'Who were Apollo 11 Astronauts ',

        options: {
            opt1: "Allan Bean",
            opt2: "Edwin Aldrin",
            opt3: "Eugene Cernan",
            opt4: "Neil Armstrong"
        },
        answer: ["Edwin Aldrin", "Neil Armstrong"],
        inputType: "checkbox"
    },
    {
        question: 'Who Orbited the Moon? ',

        options: {
            opt1: "Frank Borman",
            opt2: "Keanu Reeves",
            opt3: "Michael Collins",
            opt4: "Thomas Stafford"
        },
        answer: ["Frank Borman", "Michael Collins", "Thomas Stafford"],
        inputType: "checkbox"
    },


];

//------------------------------------------------------------------
const geographyQuestions = [
    {
        question: 'Mexico is south of the Equator',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: 'New Zealand has more sheep than people ',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'There is a country that begins with every letter of the alphabet ',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["False"],
        inputType: "radio"
    },
    {
        question: 'China only has one time zone',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'Paris is further north than Toronto',

        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'Russia borders both North Korea and Norway',


        options: {
            opt1: "True",
            opt2: "False",

        },
        answer: ["True"],
        inputType: "radio"
    },
    {
        question: 'Which of these U.S. states does NOT border Canada? ',

        options: {
            opt1: "Indiana",
            opt2: "Maine",
            opt3: "Alaska",
            opt4: "Minnesota"
        },
        answer: ["Indiana"],
        inputType: "checkbox"
    },
    {
        question: 'Which of these cities is NOT a national capital',

        options: {
            opt1: "Cairo",
            opt2: "Prague",
            opt3: "Bangkok",
            opt4: "Sydney"
        },
        answer: ["Sydney"],
        inputType: "checkbox"
    },
    {
        question: 'Which of these mountain ranges is in Europe',

        options: {
            opt1: "The Alps",
            opt2: "Atlas Mountains",
            opt3: "Carpathian Mountains",
            opt4: "The Pyrenees"
        },
        answer: ["The Alps", "Carpathian Mountains", "The Pyrenees"],
        inputType: "checkbox"
    },
    {
        question: 'Which of these countries is one of the top 20 oil producers? ',

        options: {
            opt1: "United States",
            opt2: "Iraq",
            opt3: "Norway",
            opt4: "Morocco"
        },
        answer: ["United States", "Iraq", "Norway"],
        inputType: "checkbox"
    },


];

//------------------------------------------------------------------
const computerQuestions = [
    {
        question: 'What does the computer abbreviation "WWW" usually mean ? ',

        options: {
            opt1: "Wrong Way Wire",
            opt2: "Wide World Word",
            opt3: "World Wide Web",
            opt4: "Windows Wirless Workstation"
        },
        answer: ["World Wide Web"],
        inputType: "radio"
    },
    {
        question: 'In what year was the "@" chosen for its use in e-mail addresses? ',

        options: {
            opt1: "1976",
            opt2: "1980",
            opt3: "1984",
            opt4: "1972"
        },
        answer: ["1972"],
        inputType: "radio"
    },
    {
        question: 'In which year was MIDI introduced? ',

        options: {
            opt1: "1988",
            opt2: "1983",
            opt3: "1987",
            opt4: "1979"
        },
        answer: ["1983"],
        inputType: "radio"
    },
    {
        question: 'Which company first manufactured CDs? ',

        options: {
            opt1: "Philips",
            opt2: "Yamaha",
            opt3: "IBM",
            opt4: "Time-Warner"
        },
        answer: ["Philips"],
        inputType: "radio"
    },
    {
        question: 'What was the first ARPANET message?',

        options: {
            opt1: "mary had a little lamb",
            opt2: "lo",
            opt3: "hello world",
            opt4: "All your base are belong to us"
        },
        answer: ["lo"],
        inputType: "radio"
    },
    {
        question: '1 kB is equal to ? ',

        options: {
            opt1: "1064 Bytes",
            opt2: "1000 Bytes",
            opt3: "1056 Bytes",
            opt4: "1024 Bytes"
        },
        answer: ["1000 Bytes"],
        inputType: "radio"
    },
    {
        question: 'In what year was DOS created? ',

        options: {
            opt1: "1985",
            opt2: "1973",
            opt3: "1981",
            opt4: "1977"
        },
        answer: ["1981"],
        inputType: "radio"
    },
    {
        question: 'Set of electronic circuits on one small flat piece of semiconductor material ',

        options: {
            opt1: "Boot",
            opt2: "Font",
            opt3: "Chip",
            opt4: "Icon"
        },
        answer: ["Chip"],
        inputType: "radio"
    },
    {
        question: 'In what year was the "@" chosen for its use in e-mail addresses? ',

        options: {
            opt1: "1976",
            opt2: "1980",
            opt3: "1984",
            opt4: "1972"
        },
        answer: ["1972"],
        inputType: "radio"
    },
    {
        question: 'Internet standard protocol for email transmissions ',

        options: {
            opt1: "SMTP",
            opt2: "WIFI",
            opt3: "WIKI",
            opt4: "SVGA"
        },
        answer: ["SMTP"],
        inputType: "radio"
    },


];

//------------------------------------------------------------------

let modeSwitch = document.getElementById("darkmode");
//------ Darkmode button ------
modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
})


let chosenArray = [];
let rngOptions = [];
//------------
let quest = document.getElementById("questions");

let questionTheme = document.querySelector("#selectedTheme")
let qAmount = 1;
let qTheme = "";

let displayBtn = document.getElementById("displayQuestions");

displayBtn.addEventListener("click", () => {
    qTheme = questionTheme.value;
    let questionAmount = document.querySelector("#questionAmount").value;
    qAmount = questionAmount

    if (qTheme === "miscQ") {
        qTheme = miscQuestions
    } else if (qTheme === "History") {
        qTheme = historyQuestions
    } else if (qTheme === "Geography") {
        qTheme = geographyQuestions
    } else if (qTheme === "Computer") {
        qTheme = computerQuestions
    }

    if (!qAmount || qAmount < 1) alert("Please choose a valid amount of questions")
    else {
        let rngQuestions = randomizeArr(qTheme);
        createForm(rngQuestions, qAmount);
        showResults.style.display = "initial";
    }
})



let showResults = document.getElementById("displayResults")
let finalScore = document.getElementById("finalScore");

//--------- Function to compare answers and check if they are correct -----
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
//------------------ Creates the form / questions --------------
function createForm(questions, amount) {
    let questionCounter = 1;
    quest.innerHTML = "";
    finalScore.style.visibility = "hidden";

    questions.forEach((quiz) => {
        if (questionCounter <= amount) {
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
                choice.innerHTML += `<div class ="testdiv">
            <label class="option"> ${option}
        <input type="${inputType}" name="Answer${questionCounter}"
            id="${option}${questionCounter}" value="${option}"  >
        </label> </div>` ;
            }
            questionCounter++;

        }
    })

}
//-----------------Calculates and displays the results of the quiz ---------------
function displayResult(questions) {
    score = 0;
    let counter = 1;
    questions.forEach((quiz) => {
        if (counter <= qAmount) {
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
        }
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
    displayResult(qTheme)
    finalScore.style.visibility = "visible";
})


//-------------------- Sticky Header -----------------
window.onscroll = function () { stayTop() };

let header = document.getElementById("header");
let sticky = header.offsetTop;

function stayTop() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



//----------------------"Randomizes" an array-----------------------------
function randomizeArr(arrayen) {
    let random = arrayen.sort(() => 0.5 - Math.random());
    return random;

}

//------------------------------------------------------------------


let idfk = randomizeArr(miscQuestions);

// let randomize2 = map((element) => {
//     let smth = [];
//     array[0].push

// })

let testArray = [1, 2, 3, 4, 5, 6, 7, 8];