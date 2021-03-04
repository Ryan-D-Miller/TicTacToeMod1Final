var playerOne = new Player({id: "playerOne", token: "X"});
var playerTwo = new Player({id: "playerTwo", token: "O"});

var testGame = new Game(playerOne, playerTwo);

testGame.updateGameBoard(0);
testGame.updateGameBoard(1);
testGame.updateGameBoard(2);
testGame.updateGameBoard(3);
testGame.updateGameBoard(4);
testGame.updateGameBoard(5);
testGame.updateGameBoard(6);
testGame.updateGameBoard(7);
testGame.updateGameBoard(8);


console.log(testGame.checkForTie());
