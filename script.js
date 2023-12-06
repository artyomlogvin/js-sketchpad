function createGridSquare(size) {
  const grid = document.querySelector('.grid-container');

  const square = document.createElement('div');
  square.style.width = size + 'px';
  square.style.height = size + 'px';

  grid.appendChild(square);
}

function fillGrid(gridSideSize, squaresPerSide) {
  const squareSize = gridSideSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide; i++) {
    for (let j = 0; j < squaresPerSide; j++) {
      createGridSquare(squareSize);
    }
  }
}

fillGrid(625, 16);
