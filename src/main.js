var spaces = document.querySelector("#boardGrid");

spaces.addEventListener("click", checkSpace);




var playerOne = new Player({id: "playerOne", token: "X"});
var playerTwo = new Player({id: "playerTwo", token: "O"});

var testGame = new Game(playerOne, playerTwo);

function checkSpace(event) {
  console.log(event.target);
}
