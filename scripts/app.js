const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-btn");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
