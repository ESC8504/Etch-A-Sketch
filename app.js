const gridContainer = document.querySelector('#container');
const gridButton = document.getElementById("gridButton");


let penColor = 'red';

function createGrid(gridSize) {
  // Clear the existing grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // set the grid contatiner to display with gridSize rows and columns
  gridContainer.getElementsByClassName.display = 'grid';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Create new grid items
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const content = document.createElement('div');
    content.classList.add('grid-item');
    gridContainer.appendChild(content);

    // Add a "pen" effect to each grid item using event listeners
    content.addEventListener('mouseenter', () => {
      content.style.backgroundColor = penColor;
    });
  }  
}

// Create a default grid size
createGrid(16);


// add Event listener
gridButton.addEventListener("click", function() {
  let gridSize = 0;
  // Prompt the user for a new grid size and vaild input  
  do {
    gridSize = parseInt(prompt('Please enter the number of squares per side for the new grid (Max 100):'));
  } while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100);

  createGrid(gridSize);
})

// Add a color picker to change the pen color
// const colorPicker = document.querySelector('.color-picker');

// colorPicker.addEventListener('change', () => {
//   penColor = colorPicker.value;
// });
