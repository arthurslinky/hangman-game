i = 0;
x = 0;
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
    if (i > 9) { return 0 }
    document.querySelector("img").src = `images/${i + 1}.jpg`;
    i += 1;
}

function test() {
    var userinput = document.getElementById("textbox").value.toLowerCase().trim();
    if (randomWord.includes(userinput)) {
        index = randomWord.indexOf(userinput);
        document.getElementById(index.toString()).innerHTML = userinput.toUpperCase();
    } else {
        imageChange();
    }
}
