var playerOne = new Player({id: "playerOne", token: "testPlayerOne Token"});
var playerTwo = new Player({id: "playerTwo", token: "testPlayer2 Token"});

var testGame = new Game(playerOne, playerTwo);

console.log(testGame.gameBoard);
testGame.updateGameBoard(1);
testGame.changePlayerTurn();
console.log(testGame.isPlayerOnesTurn);

testGame.updateGameBoard(0);
testGame.changePlayerTurn();
console.log(testGame.isPlayerOnesTurn);
console.log(testGame.gameBoard);
testGame.resetGameBoard();
console.log(testGame.gameBoard);
