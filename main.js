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
let score = 0;
//Changes Web Elements like Question, Image, Buttons, and Next
document.getElementById("next").addEventListener("click", () => {
    //increments i so it will move according to the question in the array
    i++
    //changes the question
    header.textContent = questions[i].question;
    //changes image when next is pressed
    img.src = questions[i].image
    //iterates throuhg the button group so each button is acceesable 
    buttonGroup.forEach((element,index) => {
        //each buttons text gets changed when next is clicked according to the question
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
    const button = e.currentTarget;
    if(userChoice === answer){
        button.style.backgroundColor = "green"
    }else{
        button.style.backgroundColor = "red"

    }
    removeEventListener
    console.log(userChoice === answer ? "yes" : "no")
    console.log(userChoice)
    console.log(answer)
    console.log(i)
    }

//score 

