class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const map = new Map();

        for(const n of nums){
            map.set(n,(map.get(n)??0) + 1)
        }

        const entries = Array.from(map.entries())

        entries.sort((a,b) => b[1] - a[1]);
        
        


        

        return entries.slice(0,k).map(a => a[0])
    }
}
