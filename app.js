let cells = document.querySelectorAll(".row > div");
let counter = 0;
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
  counter === 0;
  counter++;
  {
    if (
      cells[0].textContent === cells[1].textContent &&
      cells[1].textContent === cells[2].textContent &&
      cells[0].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[3].textContent === cells[4].textContent &&
      cells[4].textContent === cells[5].textContent &&
      cells[3].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[6].textContent === cells[7].textContent &&
      cells[7].textContent === cells[8].textContent &&
      cells[6].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[0].textContent === cells[3].textContent &&
      cells[3].textContent === cells[6].textContent &&
      cells[0].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[1].textContent === cells[4].textContent &&
      cells[4].textContent === cells[7].textContent &&
      cells[1].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[2].textContent === cells[5].textContent &&
      cells[5].textContent === cells[8].textContent &&
      cells[2].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[0].textContent === cells[4].textContent &&
      cells[4].textContent === cells[8].textContent &&
      cells[0].textContent != ""
    ) {
      alert("gg 2ez");
    }
    if (
      cells[6].textContent === cells[4].textContent &&
      cells[4].textContent === cells[2].textContent &&
      cells[6].textContent != ""
    ) {
      alert("gg 2ez");
    } else if (counter === 9) {
      alert("DRAW");
    }
  }
}
