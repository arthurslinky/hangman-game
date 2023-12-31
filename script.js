i = 0;
j = 0;
var correctLetters = [];
var incorrectLetters = [];
const wordsArray = [
    "skate",
    "draft",
    "equal",
    "feast",
    "grain",
    "blind",
    "snarl",
    "prize",
    "truck",
    "arise",
    "medal",
    "ivory",
    "board",
    "drink",
    "glove",
    "tribe",
    "frank",
    "flock",
    "stage",
    "other",
    "split",
    "drive",
    "groan",
    "valid",
    "wrong",
    "cruel",
    "power",
    "flesh",
    "plain",
    "solve",
    "tiger",
    "hover",
    "block",
    "chair",
    "dance",
    "faith",
    "grape",
    "jumbo",
    "knots",
    "lemon",
    "motel",
    "night",
    "olive",
    "piano",
    "quick",
    "table",
    "virus",
    "waltz",
    "yacht",
    "zebra"
];
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)].split("");

function incorrect() {
    const incorrectLettersContainer = document.querySelector('.incorrect-letters-container');
    document.getElementById("textbox").value = '';
    incorrectLettersContainer.innerHTML = incorrectLetters.join(', ').toUpperCase();
    if (i > 9) {
        const overlay = document.getElementById("filter").style;
        const retrybox = document.getElementById("retrybox").style;
        const saddog = document.getElementById("saddog").style;
        const theword = document.getElementById("the-word-container").style;
        document.getElementById("the-word").innerHTML = randomWord.join("");

        theword.display = 'block';
        saddog.display = 'block';
        retrybox.display = 'block';
        overlay.display = 'block';
        return 0;
    }
    document.querySelector("img").src = `images/${i + 1}.jpg`;
    i += 1;
}

function winnerScreen() {
    const overlay = document.getElementById("filter").style;
    const dancingmonkey = document.getElementById("dancingmonkey").style;
    const winbox = document.getElementById("winbox").style;

    winbox.display = 'block'
    dancingmonkey.display = 'block';
    overlay.display = 'block';
}

function test() {
    var userinput = document.getElementById("textbox").value.toLowerCase().trim();
    if(userinput.length == 0){
        return 0;
    }
    if (randomWord.includes(userinput)) {
        if (!correctLetters.includes(userinput)) {
            j += 1;
            correctLetters.push(userinput);
        }
        if (j == 5) {
            winnerScreen();
        } 
        index = randomWord.indexOf(userinput);
        document.getElementById(index.toString()).innerHTML = userinput.toUpperCase();
        document.getElementById("textbox").value = '';
    } else {
        if (incorrectLetters.includes(userinput)) {
            document.getElementById("textbox").value = '';
            return 0;
        }
        incorrectLetters.push(userinput);
        incorrect();
    }
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
       test();
    }
  }, false);