function createGridSquare() {
  const grid = document.querySelector('.grid-container');

  const square = document.createElement('div');
  square.classList.add('grid-element');

  grid.appendChild(square);
}

function fillGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      createGridSquare();
    }
  }
}

fillGrid();
