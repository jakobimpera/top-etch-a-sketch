const container = document.getElementById("container");
const slider = document.getElementById("sizeRange");

(function () {
    console.log('IIFE invoked');
    defaultGrid();

    document.getElementById('reset-button').onclick = resetGrid;
})();

// Skapar en grid 16x16

function defaultGrid() {
    console.log('defaultgrid function');

    makeRows(64, 64);

    let gridItems = [...document.getElementsByClassName('grid-item')];
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function (e) {
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

//Reset grid - med knapp - samt kunna förändra storlek på grid utan att påverka totala antal pixlar. 
function resetGrid() {
    let grid = document.querySelectorAll('.mouseHover');
    grid.forEach(mouseHover => {
        mouseHover.classList.remove('mouseHover');
    });
}

function setSize() {
    
}
// Sätter storleken på Container till en fast storlek
document.getElementById('container').style.height ="400px";
document.getElementById('container').style.width ="600px";
document.getElementById('container').style.borderRadius="200px";


