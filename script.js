const createGrid = document.querySelector('.create-grid');

function gridBlock(number) {
  for (i = 1; i <= number * number; i++) {
    const gridBox = document.querySelector('.grid-box');
    const block = document.createElement('div');

    gridBox.style.display = 'grid';
    gridBox.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridBox.style.gridTemplateColumns = `repeat(${number}, 1fr) `;

    gridBox.style.gridGap = '1px';
    gridBox.style.padding = '0';
    gridBox.style.margin = '100px auto';
    // gridBox.style.border = '1px solid white';
    gridBox.style.Width = '60%';
    block.style.padding = '2vh';
    block.style.border = '1px solid white';
    gridBox.appendChild(block);
  }
}
createGrid.addEventListener('click', () => {
  const gridNumber = document.getElementById('grid-number').value;
  gridBlock(gridNumber);
});
