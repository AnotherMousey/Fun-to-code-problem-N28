const gameBoard = document.getElementById("MinesweeperBoard");

const board_info = {
    cnt_row: 7,
    cnt_col: 7
};

let state;
let clicked;

function hash(i, j) {
    return (i - 1) * board_info.cnt_col + j - 1;
}

function init() {
    state = new Array(board_info.cnt_row + 1);
    for (var i = 1; i <= board_info.cnt_row; i++) {
        state[i] = new Array(board_info.cnt_col + 1).fill(0);
    }

    clicked = new Array(board_info.cnt_row + 1);
    for (var i = 1; i <= board_info.cnt_row; i++) {
        clicked[i] = new Array(board_info.cnt_col + 1).fill(false);
    }

    var table = document.createElement("table");
    var row, td;
    for (var i = 1; i <= board_info.cnt_row; i++) {
        row = document.createElement("tr");
        for (var j = 1; j <= board_info.cnt_col; j++) {
            td = document.createElement("td");
            td.id = hash(i, j);
            row.appendChild(td);
            td.textContent = "";
            // addCellListener(td, i, j);
        }
        table.appendChild(row);
    }
    gameBoard.appendChild(table);
}