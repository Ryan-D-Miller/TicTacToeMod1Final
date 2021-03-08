var spaces = document.querySelector("#boardGrid");
var boardHeader = document.querySelector("#boardHeader");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");
var playerOneSelection = document.querySelector("#playerOneCharSelection");
var playerTwoSelection = document.querySelector("#playerTwoCharSelection");
var playerOneImg = document.querySelector("#playerOneImg");
var playerTwoImg = document.querySelector("#playerTwoImg");

var game = new Game(new Player({id: "playerOne", token: "./assets/yoshiHead.png"}), new Player({id: "playerTwo", token: "./assets/marioHead.png"}));
window.addEventListener('load', retrieveAllStorage);
spaces.addEventListener("click", checkBoard);
playerOneSelection.addEventListener("click", function (){
  characterSelection(event, "playerOne")});
playerTwoSelection.addEventListener("click", function (){
  characterSelection(event, "playerTwo")});

function characterSelection(event, player) {
  if (event.target.classList.contains("player-img")) {
    changeCharacter(event.target.dataset.img, player);
  }
}

function changeCharacter(token, player) {
    game[player].changeToken(token);
    game.refreshCurrentPlayerToken();
    resetHeaderDisplay();
    resetPlayerTokens();
}

function resetPlayerTokens() {
  playerOneImg.src = game.playerOne.token;
  playerTwoImg.src = game.playerTwo.token;
}

function retrieveAllStorage() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  resetGame();
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
  changePointer(target);
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

function changePointer(target) {
  if(target.classList.contains("spaces")) {
    target.classList.remove("pointer");
  } else {
    target.parentElement.classList.remove("pointer");
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
  game.selectStartingPlayer();
  game.resetGameBoard();
  resetBoardDisplay();
  resetHeaderDisplay();
}

function resetBoardDisplay() {
  var spaces = document.querySelectorAll(".game-token");
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].src = "./assets/placeHolder.png";
    spaces[i].classList.add("pointer");
  }
}

function resetHeaderDisplay() {
  boardHeader.innerHTML = `It's <img class="header-token" src="${game.currentPlayer.token}"> Turn!`;
}
