class Game {
  constructor(playerOne, playerTwo) {
    this.gameBoard = [" ", " ", " ",
                      " ", " ", " ",
                      " ", " ", " "];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.isPlayerOnesTurn = true;
  }

  updateGameBoard(boardPosition) {
    if(this.isPlayerOnesTurn) {
      this.gameBoard[boardPosition] = playerOne.token;
    } else {
      this.gameBoard[boardPosition] = playerTwo.token;
    }
  }

  changePlayerTurn() {
    this.isPlayerOnesTurn = !this.isPlayerOnesTurn;
  }

  checkForWinner() {
    if(this.isPlayerOnesTurn) {
      var currentPlayersToken = this.playerOne;
    } else {
      var currentPlayersToken = this.playerTwo;
    }
    if(this.gameBoard[0] === currentPlayersToken.token &&
        this.gameBoard[1] === currentPlayersToken.token &&
        this.gameBoard[2] === currentPlayersToken.token) {
          return true;
        } else if (this.gameBoard[3] === currentPlayersToken.token &&
          this.gameBoard[4] === currentPlayersToken.token &&
          this.gameBoard[5] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[6] === currentPlayersToken.token &&
          this.gameBoard[7] === currentPlayersToken.token &&
          this.gameBoard[8] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[0] === currentPlayersToken.token &&
          this.gameBoard[3] === currentPlayersToken.token &&
          this.gameBoard[6] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[1] === currentPlayersToken.token &&
          this.gameBoard[4] === currentPlayersToken.token &&
          this.gameBoard[7] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[2] === currentPlayersToken.token &&
          this.gameBoard[5] === currentPlayersToken.token &&
          this.gameBoard[8] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[0] === currentPlayersToken.token &&
          this.gameBoard[4] === currentPlayersToken.token &&
          this.gameBoard[8] === currentPlayersToken.token) {
            return true;
        } else if (this.gameBoard[2] === currentPlayersToken.token &&
          this.gameBoard[4] === currentPlayersToken.token &&
          this.gameBoard[6] === currentPlayersToken.token) {
              return true;
        }
        return false;
  }

  updatePlayerWins() {
    if(this.isPlayerOnesTurn) {
      this.playerOne.wins.push(this.gameBoard);
      this.playerOne.saveWinsToStorage();
    } else {
      this.playerTwo.wins.push(this.gameBoard);
      this.playerTwo.saveWinsToStorage();
    }
  }
  checkForTie() {
    var isATie = true;
    for (var i = 0; i < this.gameBoard.length; i++) {
      if(this.gameBoard[i].includes(" ")) {
        isATie = false;
      }
    }
    return isATie;
  }

  resetGameBoard() {
    this.gameBoard = [" ", " ", " ",
                      " ", " ", " ",
                      " ", " ", " "];
  }
}
