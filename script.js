const container = document.getElementById("container");

(function() {
    console.log('IIFE invoked');
    defaultGrid();
})();

// Skapar en grid 16x16
function defaultGrid() {
    console.log('defaultgrid function');    

    makeRows(16, 16);
    // makeColumns(16);

    let gridItems = [...document.getElementsByClassName('grid-item')];
    console.log('griditems:', gridItems);
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function (e) {
            console.log('grid item hovered:', e.target);
            e.target.classList.add('mouse-hover');
        });
    });
    // gridItems.addEventListener('mouseover', function() {
    //      document.getElementsClassName("grid-item").classList.add("mouse-hover");
    //     });
            
    //     document.getElementsClassName("grid-item").addEventListener("mouseout"), function() {
    //     document.getElementsClassName("grid-item").classList.remove("mouse-hover");
    //    };
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
//   makeRows(16, 16);

// Skapar kolumner
// function makeColumns(cellNum) {
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < cellNum; j++) {
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//         };
//     }; //Jag vill ändra färg på "grid-item?". Hur gör jag det enklast? Ändra class? Göra en background-color change?
    
// };

