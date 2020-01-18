const createGrid = document.querySelector('.create-grid');
const color = document.getElementById('colorPicker');
const btnRandom = document.querySelector('.btn-random');

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
    block.classList.add = `block`;
    block.style.padding = '2vh';
    btnRandom.addEventListener('click', () => {
      block.addEventListener('mouseover', () => {
        block.style.backgroundColor = getRandomColor();
      });
    });

    color.addEventListener('input', () => {
      block.addEventListener('mouseover', () => {
        block.style.backgroundColor = `${color.value}`;
      });
    });

    block.style.border = '1px solid white';
    gridBox.appendChild(block);
  }
}
createGrid.addEventListener('click', () => {
  const gridNumber = document.getElementById('grid-number').value;
  gridBlock(gridNumber);
});

const clear = document.querySelector('.btn-clear');

clear.addEventListener('click', () => {
  const gridBox = document.querySelector('.grid-box');
  gridBox.innerHTML = '';
  const input = document.querySelector('#grid-number');
  input.value = '';
  document.getElementById('grid-number').focus();
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
