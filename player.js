class Player {
  constructor (playerNumber, gamePiece, wins) {
  this.playerNumber = playerNumber,
  this.gamePiece = gamePiece,
  this.wins = []
}

  saveWinsToStorage() {
    var winner = JSON.stringify([]);
    if (!JSON.parse(localStorage.getItem('gameWins'))) {
      //if parsed game wins is not in local storage
      localStorage.setItem('gameWins', wins)
      //put game wins in local storage
    };

  }

  getWinsFromStorage() {
    var parsedLocalStorage = JSON.parse(localStorage.getItem('gameWins'));
    parsedLocalStorage.push(wins);
    //pushing wins from parsed local storage to wins array in main

    var saved = JSON.stringify(parsedLocalStorage)

  }


}
