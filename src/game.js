class Game {
  constructor(playerOne, playerTwo) {
    this.gameBoard = [" ", " ", " ",
                      " ", " ", " ",
                      " ", " ", " "];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
  }

  updateGameBoard(boardPosition) {
    this.gameBoard[boardPosition] = this.currentPlayer.token;
  }

  changePlayerTurn() {
    if(this.currentPlayer.id === this.playerOne.id) {
      this.currentPlayer = this.playerOne;
    } else {
      this.currentPlayer = this.playerTwo;
    }
  }

  checkForWinner() {
    if(this.gameBoard[0] === this.currentPlayer.token &&
        this.gameBoard[1] === this.currentPlayer.token &&
        this.gameBoard[2] === this.currentPlayer.token) {
          return true;
        } else if (this.gameBoard[3] === this.currentPlayer.token &&
          this.gameBoard[4] === this.currentPlayer.token &&
          this.gameBoard[5] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[6] === this.currentPlayer.token &&
          this.gameBoard[7] === this.currentPlayer.token &&
          this.gameBoard[8] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[0] === this.currentPlayer.token &&
          this.gameBoard[3] === this.currentPlayer.token &&
          this.gameBoard[6] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[1] === this.currentPlayer.token &&
          this.gameBoard[4] === this.currentPlayer.token &&
          this.gameBoard[7] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[2] === this.currentPlayer.token &&
          this.gameBoard[5] === this.currentPlayer.token &&
          this.gameBoard[8] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[0] === this.currentPlayer.token &&
          this.gameBoard[4] === this.currentPlayer.token &&
          this.gameBoard[8] === this.currentPlayer.token) {
            return true;
        } else if (this.gameBoard[2] === this.currentPlayer.token &&
          this.gameBoard[4] === this.currentPlayer.token &&
          this.gameBoard[6] === this.currentPlayer.token) {
              return true;
        }
        return false;
  }

  updatePlayerWins() {
    if(this.currentPlayer.id === this.playerOne.id) {
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
