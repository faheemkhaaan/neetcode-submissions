class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {



        const set = new Set(nums);
        let num = 0;
        for(let i = 0; i < nums.length ;i++){

            if(set.has(i)){
                num++;
            }
        }
        

        return num
    }
}
