const container = document.getElementById("container");

(function() {
    console.log('IIFE invoked');
    defaultGrid();
   
   document.getElementById('reset-button').onclick = resetGrid;
})();

// Skapar en grid 16x16

function defaultGrid() {
    console.log('defaultgrid function');    

    makeRows(8, 8);

    let gridItems = [...document.getElementsByClassName('grid-item')];
    console.log('griditems:', gridItems);
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function (e) {
            console.log('grid item hovered:', e.target);
            e.target.classList.add('mouseHover');
            
        });
    });
}

// Tar rows & Cols och skapar en grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

  //Reset grid - med knapp
function resetGrid(){
    console.log('resetGrid');
    let grid = document.querySelectorAll('.mouseHover');
    grid.forEach(mouseHover => {
        mouseHover.classList.remove('mouseHover');
    });

}



