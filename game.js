//x = Cat
//o = fish

var gameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Game {
  constructor() {
    this.gameBoard = gameArray.fill(null);
    this.playerOne = new Player("one", "🐈‍⬛");
    this.playerTwo = new Player("two", "🍣");
    this.turn = this.playerOne.gamePiece || this.playerTwo.gamePiece
  }

  takeTurn(i) {
    if (this.gameBoard[i]) {
      return;
    }
    this.gameBoard[i] = this.turn;
    this.nextTurn();
  }

  nextTurn() {
    this.turn = this.playerOne.gamePiece

    if (this.turn === this.playerOne.gamePiece) {
      this.turn = this.playerTwo.gamePiece
      console.log(this.turn)
    } else if (this.turn === this.playerTwo.gamePiece) {
      this.turn = this.playerOne.gamePiece
      console.log(this.turn)
    }

  }

  whoWon() {
    var catStatus = this.catStatus()
    var fishStatus = this.fishStatus()

    if (catStatus === "cat lose" && fishStatus === "fish lose") {
      return "draw"
      } if (catStatus  === "cat win" && fishStatus === "fish lose") {
        return "cat win"
        } if (fishStatus === "fish win" && catStatus  === "cat lose") {
        return "fish win"
      }
    }



  catStatus() {
    var winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 5],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    var catPosition = this.catPosition();
    var stringifiedWinningCombo = JSON.stringify(winningCombo);
    var stringifiedWin = JSON.stringify(catPosition)

      if (stringifiedWinningCombo.includes(stringifiedWin)){
        return "cat win"
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
     [1, 4, 5],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
   ]

    var fishPosition = this.fishPosition();
    var stringifiedWinningCombo = JSON.stringify(winningCombo);
    var stringifiedWin = JSON.stringify(fishPosition)

    for (var i = 0; i < winningCombo.length; i++) {
      if (stringifiedWinningCombo.includes(stringifiedWin)){
        return "fish win"
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

  resetGame(){
    this.gameBoard = gameArray.fill(null);
  }
}
