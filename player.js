class Player {
  constructor(playerNumber, gamePiece, wins) {
    this.playerNumber = playerNumber;
    this.gamePiece = gamePiece;
    this.wins = 0;
  }


  saveWinsToStorage() {
  if (this.playerNumber === 'one') {
    localStorage.setItem('player1 wins', JSON.stringify(this.wins))
  } else if (this.playerNumber === 'two') {
    localStorage.setItem('player2 wins', JSON.stringify(this.wins))
  }
}




  getWinsFromStorage() {
    var parsedLocalStorage = JSON.parse(localStorage.getItem('gameWins'));
    parsedLocalStorage.push(wins);
    //pushing wins from parsed local storage to wins array in main
    var saved = JSON.stringify(parsedLocalStorage)
  }

}
