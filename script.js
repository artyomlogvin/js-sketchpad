function createGridSquare(size) {
  const grid = document.querySelector('.grid-container');

  const square = document.createElement('div');
  square.style.width = size + 'px';
  square.style.height = size + 'px';

  grid.appendChild(square);
}

function fillGrid() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      createGridSquare(25);
    }
  }
}

fillGrid();
