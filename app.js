let cells = document.querySelectorAll(".row > div");

let player = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
  if (event.target.textContent === "") {
    event.target.textContent = player;
    winCondition();
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }
  }
}

function winCondition() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    cells[2].textContent === "X" || cells[2].textContent === "O"
  ) {
    alert("gg2ez");
  }
}

cells[0];
cells[1];
cells[2];

cells[3];
cells[4];
cells[5];

cells[6];
cells[7];
cells[8];

cells[0];
cells[3];
cells[6];

cells[1];
cells[4];
cells[7];

cells[2];
cells[5];
cells[8];

cells[0];
cells[4];
cells[8];

cells[6];
cells[4];
cells[2];
