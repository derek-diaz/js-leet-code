const assert = require('assert');

// Failing some test cases
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let lookup = word.split("");
    let visited = board.map(inner => inner.slice())

    for (let row = 0; row < board.length; row++){
        let isLetterInRow = board[row].indexOf(lookup[0]);
        if (isLetterInRow !== -1){
            for (let colF = 0; colF < board[row].length; colF++){
                if (board[row][colF] === lookup[0]){
                    const result = checkBoard(row, colF, board, lookup, 0, visited);
                    if (result)
                        return true
                }
                visited[row][colF] = ".";
            }
        }
    }

    return false;
};

function checkBoard(row, col, board, lookup, index, visited){
    if (index + 1 === lookup.length)
        return true;

    //check up
    if (isInsideBounds(row - 1, col, board) && board[row -1][col] === lookup[index+1] && index < lookup.length && visited[row - 1][col] !== "."){
        visited[row - 1][col] = "."
        return checkBoard(row - 1, col, board, lookup, index + 1, visited);
    }

    //check down
    if (isInsideBounds(row + 1, col, board) && board[row + 1][col] === lookup[index+1] && index < lookup.length && visited[row + 1][col] !== "."){
        visited[row + 1][col] = ".";
        return checkBoard(row + 1, col, board, lookup, index + 1, visited);
    }

    //check left
    if (isInsideBounds(row, col - 1, board) && board[row][col - 1] === lookup[index+1] && index < lookup.length && visited[row][col - 1] !== "."){
        visited[row][col - 1] = "."
        return checkBoard(row, col - 1, board, lookup, index + 1, visited);
    }

    //check right
    if (isInsideBounds(row, col + 1, board) && board[row][col + 1] === lookup[index+1] && index < lookup.length && visited[row][col + 1] !== "."){
        visited[row][col + 1] = "."
        return checkBoard(row, col + 1, board, lookup, index + 1, visited);
    }
    if (index + 1 === lookup.length)
        return false;
}

function isInsideBounds(row, col, board) {
    return (board.length > row && board[row] && board[row].length > col)
}

try {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
    assert.equal(exist(board, "ABCCED"), true);
    console.log('PASSED: ' + ' exist should return true');
} catch (err) {
    console.log(err);
}

try {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
    assert.equal(exist(board, "SEE"), true);
    console.log('PASSED: ' + ' exist should return true');
} catch (err) {
    console.log(err);
}

try {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
    assert.equal(exist(board, "ABCB"), false);
    console.log('PASSED: ' + ' exist should return false');
} catch (err) {
    console.log(err);
}
