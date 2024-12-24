

const gameBoard = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = [['', '', ''], ['', '', ''], ['', '', '']];

// Function to check for a win
function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player &&board[i][2] === player) {
            return true;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }

    // Check diagonals
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }

    return false;
}

// Function to check for a draw
function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false; // Empty cell found, game not drawn
            }
        }
    }
    return true; // No empty cells, game is drawn
}

// Event listeners for each cell
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (cell.textContent === '' && !checkWin('X') && !checkWin('O')) {
            board[row][col] = currentPlayer;
            cell.textContent = currentPlayer;

            if (checkWin(currentPlayer)) {
                alert(`${currentPlayer} wins!`);
            } else if (checkDraw()) {
                alert("It's a draw!");
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    });
});

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    cells.forEach((cell) => {
        cell.textContent = '';
    });
}