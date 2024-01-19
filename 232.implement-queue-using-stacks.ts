/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class Stack {
    stack: number[];

    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        return this.stack.pop();
    }

    peek(): number {
        return this.stack[this.size() - 1];
    }

    empty(): boolean {
        return this.stack.length === 0;
    }

    size(): number {
        return this.stack.length
    }
}

class MyQueue {
    input: Stack;
    output: Stack;

    constructor() {
        this.input = new Stack();
        this.output = new Stack();
    }

    push(x: number): void {
        this.input.push(x);
    }

    pop(): number {
        if (this.output.empty()) {
            while (!this.input.empty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    }

    peek(): number {
        if (this.output.empty()) {
            while (!this.input.empty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.peek();
    }

    empty(): boolean {
        return this.input.empty() && this.output.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

