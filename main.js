
var game = new Game();

var gameBoard = document.getElementById('gameBoard')
var whosTurn = document.getElementById('whosTurn')
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
var zero = document.getElementById('0')
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var squares = [zero, one, two, three, four, five, six, seven, eight]


gameBoard.addEventListener('click', playGame)
window.addEventListener('load', functionsOnLoad)


function functionsOnLoad() {
  getWinsFromStorage();
  playerWinnerInnerText();
  showPlayer();
}

function playGame() {
  if (!game.gameBoard[event.target.id]){
    whosTurn.innerText = `It's ${game.turn}'s Turn`;
    game.nextTurn();
    game.takeTurn(event.target.id);
    event.target.innerText = `${game.gameBoard[event.target.id]}`;
    game.nextTurn();
    playerPosition();
    playerStatus();
    playerWins();
    itsADraw();
  }
}

function catWins() {
  catWinner = game.catStatus();
  if (catWinner === 'cat win') {
    game.playerOne.wins++;
    playerOneStorage();
    playerOneWinningText();
    clearBoard();
  } else {
    return
  }
}

function fishWins() {
  fishWinner = game.fishStatus();
  if (fishWinner === 'fish win'){
    game.playerTwo.wins++;
    playerTwoStorage();
    playerTwoWinningText();
    clearBoard();
  } else {
    return
  }
}

function noWinners(){
  var draw = game.draw();
  if (draw === 'draw') {
    whosTurn.innerText = 'Draw, no winner!';
    clearBoard();
  } else {
    return
  }
}

function clearBoard() {
  window.setTimeout(removeTokens, 2000);
  game.resetGame();
  window.setTimeout(showPlayer, 3000);
}

function removeTokens() {
  for (var i = 0; i < squares.length; i++){
    squares[i].innerText = ' ';
  }
}

function showPlayer() {
  game.nextTurn();
  whosTurn.innerText = `${game.turn} get's to start!`;
  game.nextTurn();
}

function getWinsFromStorage() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
}

function playerWinnerInnerText() {
  playerOne.innerText = `${playerOne.wins}`;
  playerTwo.innerText = `${playerTwo.wins}`;
}


function playerWins() {
  catWins();
  fishWins();
}

function itsADraw() {
  game.draw();
  noWinners();
}

function playerPosition() {
  game.catPosition();
  game.fishPosition();
}

function playerStatus() {
  game.catStatus();
  game.fishStatus();
}

function playerOneStorage() {
  game.playerOne.saveWinsToStorage();
  game.playerOne.retrieveWinsFromStorage()
}

function playerOneWinningText() {
  playerOne.innerText = `${playerOne.wins}`;
  whosTurn.innerText = '🐈‍⬛ Wins!';
}

function playerTwoStorage() {
  game.playerTwo.saveWinsToStorage();
  game.playerTwo.retrieveWinsFromStorage();
}

function playerTwoWinningText() {
  playerTwo.innerText = `${playerTwo.wins}`;
  whosTurn.innerText = '🍣 Wins!';
}
