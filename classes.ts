export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
    // static build(nodes: number[], height: number): TreeNode {
    //     return new TreeNode(nodes[0], this.build(nodes.slice(height + 1), height + 1), this.build(nodes.slice(height + 2), height + 1));
    // }

    // print(): number[] {
    //     let arr = [this.val];
    //     function goDeep(root: TreeNode): {

    //     }

    //     goDeep()

    //     arr.push(this.left)
    // }


// const ab = TreeNode.build([1,2,2,3,3,null,null,4,4], 0);

// console.log(ab.print());

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}