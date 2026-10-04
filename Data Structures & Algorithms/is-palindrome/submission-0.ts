class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let left = 0;
        let right = s.length -1;

        function isAlphanumric(s){
            return /^[a-zA-Z0-9]+$/.test(s);
        }

        while(left < right){
            const sLeft = s[left];
            const sRight = s[right];

            if(!isAlphanumric(sLeft) ){
                left++
                continue;
            }

            if(!isAlphanumric(sRight)){
                right--;
                continue;
            }

            if(sLeft.toLowerCase() !== sRight.toLowerCase()){
                return false;
            }
            left++;
            right--;

        }

        return true
    }
}
