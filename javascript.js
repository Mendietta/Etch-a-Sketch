function populateBoard (size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)  => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i< amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    };
};
populateBoard(16);

function changeSize (input) {
    if (input >= 1 && input <= 100) {
        populateBoard (input);    
    } else {
        alert("Input must be between 1 and 100");
    };
};