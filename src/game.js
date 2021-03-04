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

  resetGameBoard() {
    this.gameBoard = [" ", " ", " ",
                      " ", " ", " ",
                      " ", " ", " "];
  }
}
