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

  checkBoardEmpty(boardPosition) {
    if(this.gameBoard[boardPosition] === " ") {
      return true;
    } else {
      return false;
    }
  }

  changePlayerTurn() {
    if(this.currentPlayer.id === this.playerOne.id) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }
  }

  checkForWinner() {
    var winCons = [[0,1,2], [3,4,5], [6,7,8],
                   [0,3,6], [1,4,7], [2,5,8],
                   [0,4,8], [2,4,6]];
    var isWinner = false
    for (var i = 0; i < winCons.length; i++) {
        if (this.gameBoard[winCons[i][0]] === this.currentPlayer.token &&
            this.gameBoard[winCons[i][1]] === this.currentPlayer.token &&
            this.gameBoard[winCons[i][2]] === this.currentPlayer.token){
              isWinner = true;
            }
    }
    return isWinner;
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

  resetFirstPlayer() {
    this.currentPlayer = this.playerOne;
  }
}
