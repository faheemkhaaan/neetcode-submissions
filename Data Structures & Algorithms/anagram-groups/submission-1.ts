class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        if(strs.length ===0) return []
        
        const map = new Map();

        const getKey = (word:string) => {
            const count = new Int8Array(26);

            for(const letter of word){
                const index = letter.charCodeAt(0) - 97;
                count[index] += 1;
            }
            return count.join(',')
        }


        for(const word of strs){
            const key = getKey(word);

            if(map.has(key)){
                const group = map.get(key);
                group.push(word)
            }else{
                map.set(key,[word])
            }
            
        }
        return [...map.values()]

    }
}
