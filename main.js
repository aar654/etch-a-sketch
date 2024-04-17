//create the dom elements
const gridButton = document.getElementById("gridButton");
const grid = document.querySelector('.grid');

//function that creates the row and columns for the etch-a-sketch
function createGrid(size) {
  //creates the row based on the entered size
  for (let i = 1; i <= size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row)
    //fills in the column based on entered size
    for (let j = 1; j <= size; j++) {
      let col = document.createElement("div");
      col.className = "col";
      grid.appendChild(col);
      row.appendChild(col);
    }
  }
}

//button that asks user the size of the grid (can only be from 1-100)
gridButton.addEventListener('click', function () {
  const size = prompt("What size grid would you like?");

  if (size > 100 || size <= 0) {
    alert("Invalid number. Please enter a number between 1 and 100.");
  } else {
    grid.innerHTML = "";
    createGrid(size);
  }
});


grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "col" class
  if (e.target.matches('.col')) {
    e.target.classList.add('active');
  }
});

createGrid(16);
