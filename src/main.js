var spaces = document.querySelector("#boardGrid");
var boardHeader = document.querySelector("#boardHeader");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");

var playerOne = new Player({id: "playerOne", token: "./assets/yoshiHead.png"});
var playerTwo = new Player({id: "playerTwo", token: "./assets/marioHead.png"});
var game = new Game(playerOne, playerTwo);

window.addEventListener('load', retrieveAllStorage);
spaces.addEventListener("click", checkBoard);

function retrieveAllStorage() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  displayPlayerWins();
}

function checkBoard(event) {
  var clickedPos = getClickedPosition(event.target);
  if(game.checkBoardEmpty(clickedPos) && !game.hasWinner) {
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
    game.updatePlayerWins();
    displayPlayerWins();
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

function displayPlayerWins() {
  playerOneWins.innerText = `${game.playerOne.wins.length} Wins`;
  playerTwoWins.innerText = `${game.playerTwo.wins.length} Wins`;
}

function displayTie() {
  boardHeader.innerHTML = `It's a Tie!`;
}

function displayCurrentPlayer() {
  boardHeader.innerHTML = `It's <img class="header-token" src="${game.currentPlayer.token}"> Turn!`;
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
