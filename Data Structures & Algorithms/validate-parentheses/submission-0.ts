class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

       
        
        const stack = [];

        

        for(let i = 0 ; i < s.length; i++){
            const c = s[i];

            if(c === "("){
                stack.push(c);
            }
            if(c === "{"){
                stack.push(c);
            }
            if(c === "["){
                stack.push(c);
            }

            switch(c){
                case ")":
                    if(stack.pop() !== '('){
                        return false;
                    }
                    break;
                case "}":
                    if(stack.pop() !== "{"){
                        return false;
                    }
                    break;
                case "]":
                    if(stack.pop() !== "["){
                        return false;
                    }
                    break;
                    
            }

        }

        return stack.length === 0;
    }
}
