class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const set = new Set(nums);
        let longest = 0;

       
        for(const num of nums){

            if(!set.has(num-1)){
                let length = 0;

                while(set.has(num+length)){
                    length++;
                    if(length > longest){
                        longest = length
                    }
                }
            }

        }
        

        return longest
    }
}
