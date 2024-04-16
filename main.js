const gridButton = document.getElementById("gridButton");
const grid = document.querySelector('.grid');


gridButton.addEventListener('click', function () {
  const gridSizeInput = prompt("What size grid would you like?");

  if (gridSizeInput > 100 || gridSizeInput <= 0) {
    alert("Invalid number. Please enter a number between 1 and 100.");
  } else {
    grid.innerHTML = "";
    createGrid(gridSizeInput);
  }
});

function createGrid(gridSizeInput) {

  let newGridSize = gridSizeInput;

  for (let i = 0; i < (newGridSize * newGridSize); i++) {
    let box = document.createElement("div");
    grid.appendChild(box).className = "box";
    
  }

}

grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

createGrid(16);
