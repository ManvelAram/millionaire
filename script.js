let currentLevel = 0;
let currentQuestion;
const friends = [{
    name: "Pablo Picasso",
    intelligence: 60,
    imageUrl: 'https://www.pablopicasso.net/images/Pablo%20Picasso%20Biography.jpg?ezimgfmt=rs:357x477/rscb5/ngcb5/notWebP'
},
{
    name: "Vcho",
    intelligence: 40,
    imageUrl: 'https://i.ytimg.com/vi/W4x0iZfN0Dc/mqdefault.jpg'
},
{
    name: "Albert Einstein",
    intelligence: 95,
    imageUrl: 'http://cdn2.hubspot.net/hub/237126/file-553449513-jpg/Einstein_Albert.jpg'
}
];

let hints = new Set(["fiffty-fiffty", "audience", "call-friend"]);

const hintsHandlers = {
    "fiffty-fiffty": fiftyfifty,
    "call-friend": callFriend,
    "audience": audience,
};


let questions = [{
    text: "2+2=?",
    options: ["1", "88", "12", "4"],
    answer: "4",
    difficulty: 1,
    isUsed: false
},
{
    text: "What is the capital of Great Britain",
    options: ["Yerevan", "New-York", "London", "Manchester"],
    answer: "London",
    difficulty: 2,
    isUsed: false
},
{
    text: "American airplan company",
    options: ["Boeing", "America airways", "Il-650"," Liverpool city bus"],
    answer:"Boeing",
    difficulty: 3,
    isUsed: false

},
{
    text: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
    options: ["Pocahontas", "Sleeping Beauty", "Cinderella","Elsa"],
    answer:"Cinderella",
    difficulty: 4,
    isUsed: false

},
{
    text: "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
    options: ["Republicanism", "Communism", "Conservatism","Liberalism"],
    answer:"Communism",
    difficulty: 5,
    isUsed: false

},
{
    text: "Which toys have been marketed with the phrase “robots in disguise”?",
    options: ["Bratz Dolls", "Sylvanian Families", "Hatchimals","Transformers"],
    answer:"Transformers",
    difficulty: 6,
    isUsed: false

},
{
    text: "Obstetrics is a branch of medicine particularly concerned with what",
    options: ["Childbirth", "Broken bones", "Heart conditions","Old age"],
    answer:"Childbirth",
    difficulty: 7,
    isUsed: false

},
{
    text: "Which of these religious observances lasts for the shortest period of time during the calendar year?",
    options: ["Ramadan", "Diwali", "Lent","Hanukkah"],
    answer:"Diwali",
    difficulty: 8,
    isUsed: false

},
{
    text: "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    options: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands","Bermuda"],
    answer:"Bahamas",
    difficulty: 9,
    isUsed: false

},
{
    text: "Construction of which of these famous landmarks was completed first?",
    options: ["Empire State Building", "Royal Albert Hall", "Eiffel Tower","Big Ben Clock Tower"],
    answer:"Big Ben Clock Tower",
    difficulty: 10,
    isUsed: false

},
{
    text: "In 1718, which pirate died in battle off the coast of what is now North Carolina?",
    options: ["Calico Jack", "Blackbeard", "Bartholomew Roberts","Captain Kidd"],
    answer:"Blackbeard",
    difficulty: 11,
    isUsed: false

},
{
    text: " krol At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    options: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands","Bermuda"],
    answer:"Bahamas",
    difficulty: 12,
    isUsed: false

},
{
    text: " trol At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    options: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands","Bermuda"],
    answer:"Bahamas",
    difficulty: 13,
    isUsed: false

},
{
    text: " lol At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    options: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands","Bermuda"],
    answer:"Bahamas",
    difficulty: 14,
    isUsed: false

},
{
    text: " tobol At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    options: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands","Bermuda"],
    answer:"Bahamas",
    difficulty: 15,
    isUsed: false

},
];

function getQuestion(currentLevel) {
    return questions.find(question => question.difficulty >= currentLevel && !question.isUsed);
}

function showNewQuestion() {
    currentLevel++;
    updateProgressBar();
    currentQuestion = getQuestion(currentLevel);
    currentQuestion.isUsed = true;

    let questionBlock = document.getElementById("question");
    questionBlock.innerText = currentQuestion.text;

    let answersBlock = document.getElementsByClassName('answer-text');

    [...answersBlock].forEach((element, index) => {
        element.innerText = currentQuestion.options[index];
    });// cuica talis patasxanneri taberake

    
}

function checkAnswer(event) {
    let destination = event.target;
    if (!event.target.classList.contains('answer')) {
        destination = event.target.parentNode;
    }
    const userAnswer = destination.querySelector('.answer-text').innerText;
    if (userAnswer === currentQuestion.answer) {
        if (currentLevel === 15){
            alert('You Win!!!!');
            window.location = window.location;
        } else {
            showNewQuestion();
        }
            
    } else {
        alert('Wrong answer');
        window.location = window.location;
    }
    resetHints();
}

document.addEventListener('DOMContentLoaded', function () {
    showNewQuestion(currentLevel);
}, false);

function updateProgressBar() {
    document.querySelector('.levels ol li:nth-child('+(16-currentLevel)+')').classList.add('active') 
}

function useHints(hint) {
    if (!hints.has(hint)) {
        return alert('You alredy use this');
    }
    hints.delete(hint);
    applyHint(hint);
}

function applyHint(hint) {
    hintsHandlers[hint]();
}

function fiftyfifty() {
    let answersBlock = document.getElementsByClassName('answer-text');
    let removedCount = 0;
    [...answersBlock].forEach((element) => {
        if (element.innerText != currentQuestion.answer && removedCount < 2) {
            element.innerText = '';
            removedCount++;
        }
    });
}

function callFriend() {
    resetHints();
    let answersBlock = document.getElementsByClassName('answer-text');
    
    const aRandomIndex = Math.floor(Math.random() * friends.length - 1) + 1;
    const item = friends[aRandomIndex];
    document.getElementsByClassName('friend-answer')[0].style.display = 'block';
    document.getElementById('friend-name').innerText = item.name;
    document.getElementById('friend-image').src = item.imageUrl;

    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('randomNumber', randomNumber);
    const threshold = item.intelligence - currentLevel * 2; // 95 - 30 = 65; 95 - 4 =  91; 40 - 2 * 15 = 10
    console.log('threshold', threshold);
    if (currentLevel < 5 || randomNumber < threshold) {
        document.getElementById('variation').innerText = currentQuestion.answer
    } else {
        let randomIndex = Math.floor(Math.random() * 2) + 1;
        console.log('randomIndex', randomIndex)

        document.getElementById('variation').innerText = currentQuestion
            .options
            .filter(function(opt) {
                return opt !== currentQuestion.answer;
            })[randomIndex];
    }
    return item  
}



function audience() {
    resetHints();
    document.getElementById('audience-help').style.display = 'block';
    let percentBlock = document.getElementsByClassName("answer-percent");
    let allPercents = 100;

    [...percentBlock].forEach((element, index) => {
        // 76, 8, 8, 8  - current level = 1
        // current level = 15 (25 + 50 / 15)
        if (currentLevel <= 2) {
            if (currentQuestion.options[index] === currentQuestion.answer){
                element.innerText = 75 + "%";
                allPercents -= 75;
    
            } else {
                const percent = Math.floor(Math.random() * 8 );
                allPercents -= percent;
                element.innerText = percent + "%";
            }
        }
        
        if (currentLevel <= 8 && currentLevel > 2) {
            if (currentQuestion.options[index] === currentQuestion.answer) {
                const percent = Math.floor(75 / currentLevel + 35);
                element.innerText = percent + "%";
                allPercents -= percent;
                
            } else {
                const percent = Math.floor(Math.random() * 12);
                element.innerText = percent + "%";
                allPercents -= percent;
            }
        }

        if (currentLevel > 8) {
            const percent = Math.floor(Math.random() * (33 - 25) + 25);
            allPercents -= percent;
            element.innerText = percent + "%";
        }

        if (index === 3) {
            element.innerText = (+element.innerText + allPercents)+ "%";
        }
        
        
    });

}

function resetHints(){
    document.getElementById('audience-help').style.display = 'none';
    document.getElementsByClassName('friend-answer')[0].style.display = 'none';
}


