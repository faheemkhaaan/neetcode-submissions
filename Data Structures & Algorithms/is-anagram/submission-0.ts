class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        const sMap = new Map();
        const tMap = new Map()

        for(const letter of s){
            sMap.set(letter,(sMap.get(letter) ??0)+1)
        }

        for(const letter of t){
            tMap.set(letter,(tMap.get(letter) ??0)+1)
        }

        for(const [key,value] of tMap.entries()){
            if(sMap.get(key) !== value){
                return false
            }

        }
        
        return true

    }
}
