const grid = document.querySelector('.grid');

grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});