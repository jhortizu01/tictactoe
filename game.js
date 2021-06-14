var gameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Game {
  constructor() {
    this.gameBoard = gameArray.fill(null);
    this.playerOne = new Player("one", "🐈‍⬛");
    this.playerTwo = new Player("two", "🍣");
    this.turn = this.playerOne.gamePiece

  }

  takeTurn(i) {
    if (this.gameBoard[i] === "") {
      return;
    }
    this.gameBoard[i] = this.turn;

    this.nextTurn();
  }


  nextTurn() {
    if (this.turn === this.playerOne.gamePiece) {
      this.turn = this.playerTwo.gamePiece
    } else if (this.turn === this.playerTwo.gamePiece) {
      this.turn = this.playerOne.gamePiece
    }
  }

  catStatus() {
  var winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  var catPosition = this.catPosition();
  var stringifiedWinningCombo = JSON.stringify(winningCombo);
  var stringifiedWin = JSON.stringify(catPosition)

    if (stringifiedWinningCombo.includes(stringifiedWin)){
      return "cat win"
    } else if (catPosition.length < 4){
      return
    } else {
      return "cat lose"
    }

  }


fishStatus() {
 var winningCombo = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
 ]

//  if ( this.fishPosition.includes(this.winningCombo[i][0]) || this.fishPosition.includes(this.winningCombo[i][1]) || this.fishPosition.includes(this.winningCombo[i][2]) ) {
//
// }

  var fishPosition = this.fishPosition();
  // var stringifiedWinningCombo = JSON.stringify(winningCombo);
  // var stringifiedWin = JSON.stringify(fishPosition)

  for (var i = 0; i < winningCombo.length; i++) {
    var stringifiedWinningCombo = JSON.stringify(winningCombo);
    var stringifiedWin = JSON.stringify(fishPosition)

    if (stringifiedWinningCombo.includes(stringifiedWin)) {
      return "fish win"
    } else if (fishPosition.length < 4){
      return
    } else {
      return "fish lose"
    }
  }
}

catPosition() {
  var whereOnSquare = [];
  var gameArray = this.gameBoard
  var element = this.playerOne.gamePiece;
  var idx = gameArray.indexOf(this.playerOne.gamePiece);
  while (idx != -1) {
    whereOnSquare.push(idx);
    idx = gameArray.indexOf(element, idx + 1);
  }
  return whereOnSquare
}

fishPosition() {
  var whereOnSquare = [];
  var gameArray = this.gameBoard
  var element = '🍣';
  var idx = gameArray.indexOf('🍣');
  while (idx != -1) {
    whereOnSquare.push(idx);
    idx = gameArray.indexOf(element, idx + 1);
  }
  return whereOnSquare
}

draw() {
  var fishStatus = this.fishStatus();
  var catStatus = this.catStatus();

  if (fishStatus === "fish lose" && catStatus === "cat lose") {
   return "draw"
  }
}

// catWin() {
//   this.playerOne.wins += 1
//   this.playerTwoCounter += 1
//
// }
//
// fishWin() {
//   var fishWon = fishStatus()
//   if (fishWon === "fish win")
//   this.playerTwo.wins += 1
//   this.playerTwoCounter += 1
// }

resetGame(){
  this.gameBoard = gameArray.fill(null);
}


}
