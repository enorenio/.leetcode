/*
 * @lc app=leetcode id=108 lang=cpp
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

#include<vector>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        // Base case: if nums is empty, return nullptr
        if (nums.empty()) {
            return nullptr;
        }

        int centerIndex = nums.size() / 2;
        TreeNode* root = new TreeNode(nums[centerIndex]);
        
        vector<int> leftNums(nums.begin(), nums.begin() + centerIndex);
        vector<int> rightNums(nums.begin() + centerIndex + 1, nums.end());
        
        root->left = sortedArrayToBST(leftNums);
        root->right = sortedArrayToBST(rightNums);
        
        return root;
    }
};
// @lc code=end

