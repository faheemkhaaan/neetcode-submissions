class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
     /**
     * 
     */
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();
    for (let i = 0; i < 9; i++) {
        cols.set(i, new Set());
        rows.set(i, new Set());
        squares.set(i, new Set());
    }

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {


            if (board[row][col] === ".") {
                continue;
            }
            const squareIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            if (
                cols.get(col).has(board[row][col]) ||
                rows.get(row).has(board[row][col]) ||
                squares.get(squareIdx).has(board[row][col])
            ) {
                return false

            }
            cols.get(col).add(board[row][col]);
            rows.get(row).add(board[row][col]);
            squares.get(squareIdx).add(board[row][col]);
        }
    }
    return true
    }
}
