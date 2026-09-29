class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map = new Map()

        for(let i = 0; i < nums.length; i++){

            const n = nums[i]
            const compliment = target - n;

            if(map.has(compliment)) {
                return [map.get(compliment),i]
            }
            map.set(n,i)
        }
        return []
    }   
}
