var spaces = document.querySelector("#boardGrid");
var boardHeader = document.querySelector("#boardHeader");

spaces.addEventListener("click", checkBoard);




var playerOne = new Player({id: "playerOne", token: "./assets/yoshiHead.jpg"});
var playerTwo = new Player({id: "playerTwo", token: "./assets/marioHead.png"});

var game = new Game(playerOne, playerTwo);

function checkBoard(event) {
  var clickedPos = getClickedPosition(event.target);
  if(game.checkBoardEmpty(clickedPos)) {
    takeTurn(clickedPos, event.target);
  }
}

function getClickedPosition(target) {
  if(target.classList.contains("game-token")) {
    return target.parentElement.dataset.space;
  } else {
    return target.dataset.space;
  }
}

function takeTurn(clickedPos, target) {
  game.updateGameBoard(clickedPos);
  updateToken(target);
  if(game.checkForWinner()) {
    showWinner();
    console.log("Someone Won");
  } else if (game.checkForTie()){
    console.log("Its a tie");
  } else {
    game.changePlayerTurn();
  }
}

function updateToken(target) {
  if(target.classList.contains("game-token")) {
    target.src = game.currentPlayer.token;
  } else {
    target.firstElementChild.src = game.currentPlayer.token;
  }
}

function showWinner() {
  boardHeader.innerHTML = `<img class="header-token" src="${game.currentPlayer.token}"> has Won!`;
}
