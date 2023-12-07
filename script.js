function createGridSquare(size) {
  const grid = document.querySelector('.grid-container');

  const square = document.createElement('div');
  square.style.width = size + 'px';
  square.style.height = size + 'px';

  addHoverEffect(square);

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

function addHoverEffect(element) {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = `rgb(${Math.random() * 256}, ${
      Math.random() * 256
    }, ${Math.random() * 256})`;
  });
}

function removeGrid() {
  squaresToBeRemoved = document.querySelectorAll('.grid-container div');
  squaresToBeRemoved.forEach((square) => {
    square.remove();
  });
}

function createGrid() {
  let desiredSquares = 0;

  while (
    (desiredSquares <= 0 || desiredSquares > 100) &
    (desiredSquares != null)
  ) {
    desiredSquares = prompt('Enter squares per side (no more than 100): ');
  }

  fillGrid(gridTotalSize, desiredSquares);
}

const gridTotalSize = 625;

const newGridBtn = document.querySelector('.btn-new-grid');

newGridBtn.addEventListener('click', () => {
  removeGrid();
  createGrid();
});

fillGrid(gridTotalSize, 16);
