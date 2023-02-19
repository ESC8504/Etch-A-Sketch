const gridContainer = document.querySelector('#container');
const gridSize = 16;
let penColor = 'red';

// set the grid contatiner to display as 16 x 16
gridContainer.getElementsByClassName.display = 'grid';
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


for (let i = 1; i <= gridSize * gridSize; i++) {
  const content = document.createElement('div');
  content.classList.add('grid-item');
  gridContainer.appendChild(content);

  // Add a "pen" effect to each grid item using event listeners
  content.addEventListener('mouseenter', () => {
    content.style.backgroundColor = penColor;
  });
}

// Add a color picker to change the pen color
const colorPicker = document.querySelector('.color-picker');

colorPicker.addEventListener('change', () => {
  penColor = colorPicker.value;
});