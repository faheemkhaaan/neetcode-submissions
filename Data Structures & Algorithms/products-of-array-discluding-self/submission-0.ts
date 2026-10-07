class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const res = []

        for(let i = 0; i < nums.length; i++){
            let result = 1;
            for(let j = 0; j < nums.length; j++){
                
                if(i != j){
                    result *= nums[j];    
                };
            }
            res.push(result)
        }
        return res
    }
}
