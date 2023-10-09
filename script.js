i = 0;
const wordsArray = [
    "skate",
    "draft",
    "equal",
    "refer",
    "feast",
    "grain",
    "apple",
    "blind",
    "snarl",
    "prize",
    "truck",
    "shell",
    "arise",
    "smell",
    "medal",
    "glass",
    "truth",
    "ivory",
    "board",
    "level",
    "drink",
    "glove",
    "jelly",
    "tribe",
    "sheep",
    "frank",
    "flock",
    "stage",
    "other",
    "split",
    "paper",
    "drive",
    "groan",
    "valid",
    "wrong",
    "theme",
    "cruel",
    "power",
    "flesh",
    "plain",
    "pupil",
    "solve",
    "bitch",
    "tract",
    "abuse",
    "tiger",
    "proof",
    "creed",
    "hover"
];
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

function imageChange() {
    if (i > 9) { return 0 }
    document.querySelector("img").src = `images/${i + 1}.jpg`;
    i += 1;
}

function hangman() {
    const word = randomWord.split("");
    const answer = ["", "", "", "", ""];
    userinput = prompt("Enter a letter", "a");
    if (word.includes(userinput)) {
        var index = word.indexOf(userinput);
        answer.splice(index, 1, userinput);
        document.getElementById(index.toString()).textContent = 'a';
    }
    else {
        imageChange();
    }
}

