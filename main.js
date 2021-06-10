
//var wins = [];

var game = new Game();


game.takeTurn(0); //x
game.takeTurn(1)
game.takeTurn(3); //x
game.takeTurn(2)
game.takeTurn(6); //x
game.takeTurn(5)
console.log(game.gameBoard)
console.log(game.findWinningCombo())

// var img = document.createElement('img')
// img.src = 'images/aftersurprise.png';
// document.getElementById('surprise').appendChild(img);
