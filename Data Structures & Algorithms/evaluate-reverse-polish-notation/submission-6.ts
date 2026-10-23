class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stack = [];
        for(const c of tokens){
            if(c === "+"){
                const op1 =stack.pop();
                const op2 =stack.pop();
                const result = Number(op2) + Number(op1);
                stack.push(result);
            }else if(c === "-"){
                const op1 =stack.pop();
                const op2 =stack.pop();
                const result = Number(op2) - Number(op1);
                stack.push(result); 
            }else if(c === "*"){
                const op1 =stack.pop();
                const op2 =stack.pop();
                const result = Number(op2) * Number(op1);
                stack.push(result); 
            }else if(c === "/"){
                const op1 =stack.pop();
                const op2 =stack.pop();
                const result = Number(op2) / Number(op1);
                stack.push(Math.trunc(result)); 
            }else {
                stack.push(Number(c));
            }
        }

        return stack.pop()
    }
}
