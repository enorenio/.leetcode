/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */
// @lc code=start
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (x) {
        this.stack.push(x);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        return this.stack[this.size() - 1];
    };
    Stack.prototype.empty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    return Stack;
}());
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.input = new Stack();
        this.output = new Stack();
    }
    MyQueue.prototype.push = function (x) {
        this.input.push(x);
    };
    MyQueue.prototype.pop = function () {
        if (this.output.empty()) {
            while (!this.input.empty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    };
    MyQueue.prototype.peek = function () {
        if (this.output.empty()) {
            while (!this.input.empty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.peek();
    };
    MyQueue.prototype.empty = function () {
        return this.input.empty() && this.output.empty();
    };
    return MyQueue;
}());
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
//# sourceMappingURL=232.implement-queue-using-stacks.js.map