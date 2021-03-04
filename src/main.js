var playerOne = new Player({id: "playerOne", token: "test"});
var playerTwo = new Player({id: "playerTwo", token: "test"});

var testGame = new Game(playerOne, playerTwo);

console.log(testGame);
