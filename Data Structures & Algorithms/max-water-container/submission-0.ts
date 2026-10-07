class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let maxArea = -Infinity;

        let left = 0;
        let right = heights.length - 1;

        while(left < right){

            const width = right - left;
            const height = Math.min(heights[left],heights[right]);

            const area = width * height;

            if(area > maxArea){
                maxArea = area;
            }
            left++
        }

       return maxArea;
    }
}
