function startNewGame() {
  if (players[0].name === "" || players[1] === "") {
    alert("Set custom player names for both players!");
    return;
  }
  gameArea.style.display = "block";
}
