const questions = [
    {
        "number": 1,
        "question": "What Block is this?",
        "image": "./images/grass-block.png.png",
        "options": [
            "Grass Block",
            "Bedrock Block",
            "Glass Block"
        ],
        "answer": "Grass Block"
    },
    {
        "number": 2,
        "question": "What Mob is this?",
        "image": "./images/Enderman.png.png",
        "options": [
            "Slender Dude",
            "Enderman",
            "Skinny Man"
        ],
        "answer": "Enderman"
    },
    {
        "number": 3,
        "question": "Who created Minecraft?",
        "image": "./images/notch.jpg",
        "options": [
            "Block Man",
            "Notch",
            "Mark Zukerburg"
        ],
        "answer": "Notch"
    },
    {
        "number": 4,
        "question": "Who is this man?",
        "image": "images/Herobrine.png.png",
        "options": [
            "Scary Steve",
            "Herobrine",
            "Steve"
        ],
        "answer": "Herobrine"
    },
    {
        "number": 5,
        "question": "Who's this Rizzler?",
        "image": "images/steve-rizz.jpg.jpg",
        "options": [
            "Steve",
            "Mark",
            "Block Man"
        ],
        "answer": "Steve"
    }
];


let i = 0;
//elements of website
const header = document.getElementById("question");
const img = document.getElementById("image");
const buttonGroup = document.querySelectorAll(".answer");
let scoreNum = 0
function loadQuestion() {
    removeColors();
    header.textContent = questions[i].question;
    img.src = questions[i].image;
    buttonGroup.forEach((element, index) => {
    element.innerText = questions[i].options[index];
    element.addEventListener("click", checkAnswer);
    });
}

//Changes Web Elements like Question, Image, Buttons, and Next
document.getElementById("next").addEventListener("click", () => {
    i++
    //increments i so it will move according to the question in the array
    scoreChange()
    if (i < questions.length) {
        loadQuestion();
    } else {
        endText = "  The End"
        document.getElementById("score").textContent = scoreText + endText
    }

    });
function checkAnswer(e) {
    const userChoice = e.currentTarget.innerText
    const answer = questions[i].answer
    const button = e.currentTarget;

    console.log(userChoice)
    console.log(answer)
    console.log(questions[i])
    if(userChoice === answer){
        button.style.backgroundColor = "green"
        scoreNum++
    }else{
        button.style.backgroundColor = "red"

    }

    }
    function removeColors() {
        buttonGroup.forEach((element) => {
            element.style.backgroundColor = ""
        })
    }
    function scoreChange() {
    scoreText = scoreNum
    document.getElementById("score").textContent = scoreText
    }
loadQuestion();
scoreChange()