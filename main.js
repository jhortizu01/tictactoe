
//var wins = [];

var game = new Game();

var gameBoard = document.getElementById('gameBoard')
var whosTurn = document.getElementById('whosTurn')
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
window.addEventListener('load', showPlayer)

function showPlayer() {
  game.nextTurn()
  whosTurn.innerText = `${game.turn} get's to start!`
  game.nextTurn()

}


function playGame(){

  whosTurn.innerText = `It's ${game.turn}'s Turn`
game.nextTurn()
  console.log(event.target.id)

    if (event.target.id === '0'){
     zero.innerText = `${game.turn}`
     game.takeTurn(0)
     game.nextTurn()
     console.log(game.catPosition())
     console.log(game.fishPosition())
     console.log(game.catStatus())
     console.log(game.fishStatus())
   } if (event.target.id === '1'){
    one.innerText = `${game.turn}`
    game.takeTurn(1)
     game.nextTurn()
    console.log(game.turn)
    console.log(game.catPosition())
    console.log(game.fishPosition())
    console.log(game.catStatus())
    console.log(game.fishStatus())
  } if (event.target.id === '2'){
   two.innerText = `${game.turn}`
   game.takeTurn(2)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '3'){
   three.innerText = `${game.turn}`
   game.takeTurn(3)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '4'){
   four.innerText = `${game.turn}`
   game.takeTurn(4)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '5'){
   five.innerText = `${game.turn}`
   game.takeTurn(5)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '6'){
   six.innerText = `${game.turn}`
   game.takeTurn(6)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '7'){
   seven.innerText = `${game.turn}`
   game.takeTurn(7)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  } if (event.target.id === '8'){
   eight.innerText = `${game.turn}`
   game.takeTurn(8)
    game.nextTurn()
   console.log(game.turn)
   console.log(game.catPosition())
   console.log(game.fishPosition())
   console.log(game.catStatus())
   console.log(game.fishStatus())
  }
}
