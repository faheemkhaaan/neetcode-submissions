class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        
        let str = "";

        for(const s of strs){

            const hashedStr = `${s.length}#${s}`;
            str += hashedStr
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        
        const decodedStr = [];
        let i = 0; 

        while(i < str.length){
            const index = str.indexOf("#",i);
            const length = parseInt(str.substring(i,index),10);
            const start = Number(index) + 1;
            decodedStr.push(str.substring(start,start+length));
            i = start + length;
        }
        return decodedStr
    }
}
