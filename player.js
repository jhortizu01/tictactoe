class Player {
  constructor(playerNumber, gamePiece, wins) {
    this.playerNumber = playerNumber;
    this.gamePiece = gamePiece;
    this.wins = 0;
  }

  saveWinsToStorage() {
  if (this.playerNumber === 'one') {
    localStorage.setItem('player1 wins', JSON.stringify(game.playerOne.wins))
  } else if (this.playerNumber === 'two') {
    localStorage.setItem('player2 wins', JSON.stringify(game.playerTwo.wins))
   }
 }

  retrieveWinsFromStorage() {
     if (this.playerNumber === 'one') {
       playerOne.wins = (JSON.parse(localStorage.getItem('player1 wins')) || 0)
       this.wins = playerOne.wins
     } else if (this.playerNumber === 'two') {
       playerTwo.wins = (JSON.parse(localStorage.getItem('player2 wins')) || 0)
       this.wins = playerTwo.wins
      }
    }
  }
