const gridContainer = document.querySelector('#container');
const gridSize = 16;

// set the grid contatiner to display as 16 x 16
gridContainer.getElementsByClassName.display = 'grid';
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


for (let i = 1; i <= gridSize * gridSize; i++) {
    const content = document.createElement('div');
    content.classList.add('grid-item');
    console.log('hahahaha')
    gridContainer.appendChild(content);
}

