const assert = require('assert');
/**
 * @param {character[][]} grid
 * @return {number}
 */
// Have to use DFS (Connected Components)
var numIslands = function(grid) {
    let islands = 0;
    let visited = [...grid]

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1" && visited[row][col] !== "X") {
                islands++;
                bfs(row,col, visited, grid);
            }
            visited[row][col] = "X";
        }
    }

    return islands;
};

var bfs = function (row, col, visited, grid) {
    let queue = [];
    queue.push([row, col])

    while (queue.length) {
        let vertex = queue.shift();
        let rowV = vertex[0];
        let colV = vertex[1];

        //bottom
        if (pegChecker( rowV + 1, colV, visited, grid)) {
            queue.push([rowV + 1,  colV]);
            visited[rowV + 1][colV] = "X";
        }

        //top
        if (pegChecker( rowV - 1, colV,visited, grid)) {
            queue.push([rowV - 1,  colV]);
            visited[rowV - 1][colV] = "X";
        }

        //left
        if (pegChecker( rowV, colV - 1, visited, grid)) {
            queue.push([rowV,  colV - 1]);
            visited[rowV][colV - 1] = "X";
        }

        //right
        if (pegChecker( rowV, colV + 1, visited, grid)) {
            queue.push([rowV,  colV + 1]);
            visited[rowV][colV + 1] = "X";
        }
    }
}

function pegChecker(row,col,visited, grid) {
    return (isInsideBounds(row, col, grid) && grid[row][col] === "1" && visited[row][col] !== "X" )
}

function isInsideBounds(row, col, grid) {
    return (grid.length > row && grid[row] && grid[row].length > col)
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