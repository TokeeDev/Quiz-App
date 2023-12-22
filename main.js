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


//Header Change
let i = 0;
//elements of website
const header = document.getElementById("question");
const img = document.getElementById("image");
const buttonGroup = document.querySelectorAll(".answer");
//Changes Web Elements like Question, Image, Buttons, and Next
document.getElementById("next").addEventListener("click", () => {
    i++
    header.textContent = questions[i].question;
    img.src = questions[i].image
    buttonGroup.forEach((element,index) => {
        element.innerText = questions[i].options[index]
        //checks if answer is right or wrong
        element.id = i;
        element.addEventListener("click", checkAnswer)
    });
});

function checkAnswer(e) {
    const i = e.currentTarget.id
    const userChoice = e.currentTarget.innerText
    const answer = questions[i].answer
    
    console.log(userChoice === answer ? "yes" : "no")
    console.log(userChoice)
    console.log(answer)
    }
//score 

let score = 0;
