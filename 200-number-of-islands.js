const assert = require('assert');


/**
 * @param {character[][]} grid
 * @return {number}
 */
// Have to use DFS (Connected Components)
var numIslands = function(grid) {
    let islands = 0;
    let visited = new Set();

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1" && !visited.has({row, col})) { //visited.has is not working correctly
                islands++;
                dfs(row,col, visited, grid);
            }else{
                visited.add({row,col});
            }
        }
    }

    return islands;
};

var dfs = function(row, col, visited, grid) {
    // Check if out of bounds
    if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[row].length - 1) {
        return
    }

    if (grid[row][col] === "0" || visited.has(row, col)) {
        return;
    }

    if (grid[row][col] === "1"){
        visited.add(row, col);
    }

    dfs(row, col - 1, visited, grid)
    dfs(row, col + 1, visited, grid)
    dfs(row - 1, col, visited, grid)
    dfs(row + 1, col, visited, grid)
}

try {
    const grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
    assert.equal(numIslands(grid), 1);

    console.log('PASSED: ' + 'numIslands should return 1');
} catch (err) {
    console.log(err);
}

try {
    const grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
    assert.equal(numIslands(grid), 3);

    console.log('PASSED: ' + 'numIslands should return 3');
} catch (err) {
    console.log(err);
}