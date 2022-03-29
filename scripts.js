const divContainer = document.getElementById("board-container")
let board;
let gridSize =  100;
let fragment = document.createDocumentFragment();

for (let i = 0; i < gridSize; ++i) {
    board = document.createElement("div");
    board.className = "divBoard";
    fragment.appendChild(board);
}
document.getElementById("board-container").appendChild(fragment);