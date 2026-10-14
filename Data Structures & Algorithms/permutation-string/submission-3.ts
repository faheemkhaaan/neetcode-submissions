class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        const s1Key = this.getKey(s1);

        let l = 0;

        for(let r = 0 ; r < s2.length; r++){
            
            if((r - l +1) > s1.length){
                l++;
            };

            const slice = s2.slice(l,r+1);
            const sliceKey = this.getKey(slice);
            if(s1Key === sliceKey){
                return true;
            }
        }
        return false


    };

    getKey(str:string){
        const key = new Array(26).fill(0);

        for(const s of str){

            const code = s.charCodeAt(0) - 97;

            key[code] = key[code]+1;
        };
        return key.toString()
    }
}
