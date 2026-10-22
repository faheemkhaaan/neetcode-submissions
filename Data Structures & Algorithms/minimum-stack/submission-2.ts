class MinStack {
    private stack = [];
    private minStack = []
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        
        if(this.minStack.length === 0){
            this.minStack.push(val);
        }else{
            const minMum = this.minStack[this.minStack.length -1];

            if(val <= minMum){
                this.minStack.push(val);
            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const value=  this.stack.pop();

        if(value === this.minStack[this.minStack.length - 1]){
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
