let button = document.querySelector("#start");
button.addEventListener("click", (startTheGame) => {
alert('Let the games begin! Click on any square to start, player X.')
})
// start button & inital "start game" alert

let letterX = '<img src=x-pic.jpg>'
let letterO = '<img src=o-pic.jpg>'
// add images for x and 0
const humanPlayer = 'O'
const compPlayer = 'X'   

// while winConditions = false

//function for winConditions
const winConditions = [
  [0, 1, 2, "row-1"],
  [3, 4, 5, "row-2"],
  [6, 7, 8, "row-3"],
  [0, 3, 6, "col-1"],
  [1, 4, 7, "col-2"],
  [2, 5, 8, "col-3"],
  [0, 4, 8, "diag-1"],
  [2, 4, 6, "diag-2"]  
];
const rows = document.querySelectorAll('.row')
//winConditions -> 8 ways to win
startGame();
function startGame() {
  document.querySelector(".endgame").getElementsByClassName.display = "none"
}