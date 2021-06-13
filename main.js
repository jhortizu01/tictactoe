
//var wins = [];

var game = new Game();


var gameBoard = document.getElementById('gameBoard')
var gameBoardArea = document.getElementById('gameBoardArea')
var whosTurn = document.getElementById('currentTurn')
var gameTitle = document.getElementById('gameTitle')
var squareOne = document.getElementById('squareOne')
var squareTwo = document.getElementById('squareTwo')
var squareThree = document.getElementById('squareThree')
var squareFour = document.getElementById('squareFour')
var squareFive = document.getElementById('squareFive')
gameBoardArea.addEventListener("click", showTurn)
squareOne.addEventListener("click", placeTokenCat)

console.log(game.nextTurn())
console.log(game.nextTurn())
console.log(game.nextTurn())
function placeTokenCat() {

  // var theirTurn = game.takeTurn()
  //
  // if (game.playerOne === theirTurn) {
  //   squareOne.innerHTML += "🐈‍⬛‍"
  //   return
  // } if (game.playerTwo === theirTurn) {
  //   squareOne.innerHTML += "🍣"
  // }


  // game.playerOne
  // game.playerTwo
  // game.gameboard


  }

function showTurn() {
  var x = whosTurn
  if (x.innerHTML === "🐈‍⬛‍") {
     x.innerHTML = "🍣";
   } else {
     x.innerHTML = "🐈‍⬛‍";
  }
}
