i = 0;
j = 0;
var correctletters = [];
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

    "bitch",

    "abuse",

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

    "shoes",

    "table",

    "virus",

    "waltz",

    "yacht",

    "zebra"

];
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)].split("");

function imageChange() {
    if (i > 9) { 
        const overlay = document.getElementById("filter").style;
        const retrybox = document.getElementById("retrybox").style;
        
        retrybox.display = 'block';
        overlay.display = 'block';
        return 0; 
     }
    document.querySelector("img").src = `images/${i + 1}.jpg`;
    i += 1;
}

let incorrectLetters = [];
function displayIncorrectLetters() {
    const incorrectLettersContainer = document.querySelector('.incorrect-letters-container');
    incorrectLettersContainer.innerHTML = incorrectLetters.join(' ').toUpperCase();
}

function winnerScreen(){
    const overlay = document.getElementById("filter").style;
    const dancingmonkey = document.getElementById("dancingmonkey").style;

    dancingmonkey.display = 'block';
    overlay.display = 'block';
}

function test() {
    var userinput = document.getElementById("textbox").value.toLowerCase().trim();
    if (randomWord.includes(userinput)) {
        j += 1;
        if(j > 5){
            winnerScreen();
        }
        
        index = randomWord.indexOf(userinput);
        document.getElementById(index.toString()).innerHTML = userinput.toUpperCase();
        correctletters.push(userinput);
    } else {
        if(!incorrectLetters.includes(userinput)){
            incorrectLetters.push(userinput);   
            displayIncorrectLetters();
        }else{
            return 0;
        }
        imageChange();
    }
}