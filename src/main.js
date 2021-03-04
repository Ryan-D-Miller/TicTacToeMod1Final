var spaces = document.querySelector("#boardGrid");

spaces.addEventListener("click", takeTurn);




var playerOne = new Player({id: "playerOne", token: "./assets/yoshiHead.jpg"});
var playerTwo = new Player({id: "playerTwo", token: "./assets/marioHead.png"});

var game = new Game(playerOne, playerTwo);
console.log(game.gameBoard);
function takeTurn(event) {
  if(event.target.classList.contains("game-token")) {
    game.updateGameBoard(event.target.parentElement.dataset.space);
  } else {
    game.updateGameBoard(event.target.dataset.space);
  }
  console.log(game.gameBoard);
}
