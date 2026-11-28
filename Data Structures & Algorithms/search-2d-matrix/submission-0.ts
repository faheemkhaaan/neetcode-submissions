class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {


        for(let i  = 0; i < matrix.length; i++){

            let row = matrix[i]

            let left = 0; 
            let right = row.length - 1;

            while(left <= right){

                const mid = Math.floor((left + right) / 2);

                if(row[mid] === target){
                    return true;
                }
                if(row[mid] < target){
                    left = mid + 1;
                }

                if(row[mid] > target){
                    right = mid - 1;
                }
                if(left === right && row[left]===target){
                    return true;
                }

            }
        }
        return false;
    }
}
