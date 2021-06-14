
//var wins = [];

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



gameBoard.addEventListener('click', playGame)
window.addEventListener('load', functionsOnLoad)


function functionsOnLoad() {
game.playerOne.retrieveWinsFromStorage()
game.playerTwo.retrieveWinsFromStorage()
playerOne.innerText = `${playerOne.wins}`
playerTwo.innerText = `${playerTwo.wins}`
// game.playerOne.saveWinsToStorage()
// game.playerTwo.saveWinsToStorage()

showPlayer()
}

function showPlayer() {
  game.nextTurn()
  whosTurn.innerText = `${game.turn} get's to start!`
  game.nextTurn()

}


function playGame(){

  whosTurn.innerText = `It's ${game.turn}'s Turn`
  game.nextTurn()
  // game.playerOne.retrieveWinsFromStorage()
  // game.playerTwo.retrieveWinsFromStorage()

    if (event.target.id === '0'){
     zero.innerText = `${game.turn}`
     game.takeTurn(0)
     game.nextTurn()
     game.catPosition()
     game.fishPosition()
     console.log(game.catStatus())
     console.log(game.fishStatus())
     catWins()
     fishWins()
     game.draw()
     noWinners()
   } if (event.target.id === '1'){
    one.innerText = `${game.turn}`
    game.takeTurn(1)
     game.nextTurn()
    console.log(game.turn)
    console.log(game.catPosition())
    console.log(game.fishPosition())
    console.log(game.catStatus())
    console.log(game.fishStatus())
    catWins()
    fishWins()
    game.draw()
    noWinners()
  } if (event.target.id === '2'){
   two.innerText = `${game.turn}`
   game.takeTurn(2)
   game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
   noWinners()
  } if (event.target.id === '3'){
   three.innerText = `${game.turn}`
   game.takeTurn(3)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
   noWinners()
  } if (event.target.id === '4'){
   four.innerText = `${game.turn}`
   game.takeTurn(4)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
   noWinners()
  } if (event.target.id === '5'){
   five.innerText = `${game.turn}`
   game.takeTurn(5)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
   noWinners()
  } if (event.target.id === '6'){
   six.innerText = `${game.turn}`
   game.takeTurn(6)
   game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
    noWinners()
  } if (event.target.id === '7'){
   seven.innerText = `${game.turn}`
   game.takeTurn(7)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
  noWinners()

  } if (event.target.id === '8'){
   eight.innerText = `${game.turn}`
   game.takeTurn(8)
   game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
   catWins()
   fishWins()
   game.draw()
  noWinners()

  }
}

function catWins(){
  catWinner = game.catStatus()
  if (catWinner === "cat win") {
    game.playerOne.wins++
    game.playerOne.saveWinsToStorage()
   game.playerOne.retrieveWinsFromStorage()
    playerOne.innerText = `${playerOne.wins}`
    whosTurn.innerText = '🐈‍⬛ Wins!'
    clearBoard();
    } else {
      return
  }
}

function fishWins(){
  fishWinner = game.fishStatus()
  if (fishWinner === "fish win"){
  game.playerTwo.wins++
  game.playerTwoCounter++
  game.playerTwo.saveWinsToStorage()
  game.playerTwo.retrieveWinsFromStorage()
  playerTwo.innerText = `${playerTwo.wins}`
  whosTurn.innerText = '🍣 Wins!'
  clearBoard();
  } else {
    return
  }
}

function noWinners(){
  var draw = game.draw()
  if (draw === 'draw') {
  whosTurn.innerText = 'Draw, no winner!'
  clearBoard()
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
  zero.innerText = " "
  one.innerText = " "
  two.innerText = " "
  three.innerText = " "
  four.innerText = " "
  five.innerText = " "
  six.innerText = " "
  seven.innerText = " "
  eight.innerText = " "
}
