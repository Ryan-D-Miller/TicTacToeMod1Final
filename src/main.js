var playerOne = new Player({id: "playerOne", token: "X"});
var playerTwo = new Player({id: "playerTwo", token: "O"});

var testGame = new Game(playerOne, playerTwo);

testGame.updateGameBoard(0);
testGame.updateGameBoard(4);
console.log(testGame.checkForWinner());
testGame.updateGameBoard(7);

console.log(testGame.checkForWinner());
