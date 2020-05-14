let cells = document.querySelectorAll(".row > div");

console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
  event.target.textContent = "X";
}


