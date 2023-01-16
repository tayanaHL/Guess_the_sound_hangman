//Game Answers//
const words = ["pac man"]
//const words = ["super mario","pac man","sonic", "tetris", "space invader" ];
//Randomize Game Answers//
let selectedWord = words
//Hints//
const hint = document.querySelectorAll("#hint-text")
//Try Again Button//
//Playsound Button//
const playButton = document.getElementById("playbutton")
//Audio for PacMan//
const pacAudio = new Audio ("https://vgmsite.com/soundtracks/pac-man-game-sound-effects/gmiffyvl/Intro.mp3");
//Select Figure//
const hangmanFigure = document.querySelectorAll("hangman-figure");

//Playbutton Sound for Pac Man prompt//
playButton.addEventListener("click", playbuttonSounds);

function playbuttonSounds(){
    console.log("pacAudio")
    pacAudio.play()
}

let answerArray = [];
for (let i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}
//not sure how to get the answer array to show//


