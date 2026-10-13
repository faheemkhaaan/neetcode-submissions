class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left =  0 ;
        let res = 0;

        let map  =new Map<string,number>();

        for(let right =  0; right < s.length; right++){
            
            map.set(s[right],(map.get(s[right])??0 )+1)
            
            let maxFreq = 0;
            for(const [_,value] of map){
                if(value > maxFreq){
                    maxFreq = value;
                }
            };

            while ((right-left+1) - maxFreq > k){
                map.set(s[left],map.get(s[left])-1);
                left++;
            }


            // res = Math.max(res,right-left+1)  

            if((right-left+1) > res){
                res = right-left+1;
            }
        };

        return res;
    }
}
