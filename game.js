//x = Cat
//o = fish

var gameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Game {
  constructor() {
    this.gameBoard = gameArray.fill(null);
    this.playerOne = new Player("one", "cat")
    this.playerTwo = new Player("two", "fish")
    this.turn = this.playerOne.gamePiece
  }

  nextTurn() {
    this.turn = this.turn === this.playerOne.gamePiece ? this.playerTwo.gamePiece : this.playerOne.gamePiece
  }

  takeTurn(i) {
    if (this.gameBoard[i]) {
      return;
    }
    this.gameBoard[i] = this.turn;
    this.nextTurn();
  }

  findWinningCombo() {
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

    //if this.gameBoard is equal to any position in 0, 1 & 2 that
    // equals a win

    for (var i = 0; i < winningCombo.length; i++)

    if (this.gameBoard[i].includes(winningCombo[i])){
      return winningCombo;
      } else {
        return null
    }
  }


}
