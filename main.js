var origBoard;
const human = 'O';
const robot = 'X';
const boardWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
] 
const cells = document.querySelector('.cells');
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none"; 
  origBoard = Array.from(Array(9).keys());
}

// -------------------OLD CODE------------------ //

// let button = document.querySelector("#start");
// button.addEventListener("click", (startTheGame) => {
// alert('Let the games begin! Click on any square to start, player X.')
// })
// start button & inital "start game" alert

// startButton.addEventListener("click", evt => {
//   evt.target.disabled = true;
//   const gameStatus = document.createElement("p");
//   gameStatus.appendChild(gameStatus);
//   setUpBoard();
//   console.log("board is setup");
// });
// function setUpBoard() {
//   const allCells = document.querySelectorAll('div, div div');
//   allCells.forEach(evt =>
//     evt.target.addEventListener('click', handeClick))
// }
// function handeClick(e) {
//   e.target.textContent = 'x';
//   console.log('clicked cell', e .target);
// }

// class Board {
//   constructor(cells) {
//     let rowOne = cells.slice(0, 3);
//     let rowTwo = cells.slice(3, 6);
//     let rowThree = cells.slice(6, 9);
//     this.cells = [rowOne, rowTwo, rowThree];
//   }
// }

// let letterX = '<img src=x-pic.jpg>'
// let letterO = '<img src=o-pic.jpg>'
// // add images for x and 0
// const playerX = 'x';
// const playerY= 'y';   

// // while winConditions = false

// //function for winConditions
// const winConditions = [
//   [0, 1, 2, "row-1"],
//   [3, 4, 5, "row-2"],
//   [6, 7, 8, "row-3"],
//   [0, 3, 6, "col-1"],
//   [1, 4, 7, "col-2"],
//   [2, 5, 8, "col-3"],
//   [0, 4, 8, "diag-1"],
//   [2, 4, 6, "diag-2"]  
// ];
// const rows = document.querySelectorAll('.row')
// //winConditions -> 8 ways to win
// startGame();
// function startGame() {
//   document.querySelector(".endgame").getElementsByClassName.display = "none"
// }