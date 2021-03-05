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
    displayWinner();
    var timeOut = window.setTimeout(resetGame, 3000);
  } else if (game.checkForTie()){
    displayTie();
        var timeOut = window.setTimeout(resetGame, 3000);
  } else {
    game.changePlayerTurn();
    displayCurrentPlayer();
  }
}

function updateToken(target) {
  if(target.classList.contains("game-token")) {
    target.src = game.currentPlayer.token;
  } else {
    target.firstElementChild.src = game.currentPlayer.token;
  }
}

function displayWinner() {
  boardHeader.innerHTML = `<img class="header-token" src="${game.currentPlayer.token}"> has Won!`;
}

function displayCurrentPlayer() {
  boardHeader.innerHTML = `It's <img class="header-token" src="${game.currentPlayer.token}"> Turn!`;
}

function displayTie() {
  boardHeader.innerHTML = `It's a Tie!`;
}

function resetGame() {
  game.resetGameBoard();
  game.resetFirstPlayer();
  resetBoardDisplay();
  resetHeaderDisplay();
}

function resetBoardDisplay() {
  var spaces = document.querySelectorAll(".game-token");
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].src = "./assets/placeHolder.png";
  }
}

function resetHeaderDisplay() {
  boardHeader.innerHTML = `It's <img class="header-token" src="${game.currentPlayer.token}"> Turn!`;
}
