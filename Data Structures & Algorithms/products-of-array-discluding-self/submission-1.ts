class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const n = nums.length;
        const prefix = new Array(n);
        const suffix = new Array(n);
        const output = new Array(n);

        prefix[0] = 1;

        for(let i =1;i < nums.length;i ++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }
        suffix[n-1] = 1;

        for(let i = nums.length-2;i>=0;i--){
            suffix[i] = suffix[i+1] * nums[i+1]
        }

        for(let i = 0; i< n; i++){
            output[i] = suffix[i] * prefix[i]
        }
        
        return output
    }
}
