class Player {
  constructor(playerDetails) {
    this.id = playerDetails.id;
    this.token = playerDetails.token;
    this.wins = [];
  }

  saveWinsToStorage() {
    var stringifiedObject = JSON.stringify(this.wins);
    localStorage.setItem(this.id, stringifiedObject);
  }

  retrieveWinsFromStorage() {
    var retrivedObject = localStorage.getItem(this.id);
    this.wins = JSON.parse(retrivedObject);
    //return JSON.parse(retrivedObject);
  }
}
