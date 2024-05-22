import React from "react";

class BinaryTreeDescription extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8 bg-transparent tracking-wider">
        <h2 className="text-4xl font-bold mb-4 text-center bg-primary-gradient-to-right p-16 text-white rounded-lg">
          Binary Tree Data Structure
        </h2>
        <p className="text-lg mt-10 mb-16">
          A binary tree is a hierarchical data structure in which each node has
          at most two children, referred to as the left child and the right
          child. It is commonly used for efficient searching and sorting
          operations.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Operations:</h3>
          <ul>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Insert:</strong> Add a new node to the tree.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Delete:</strong> Remove a specified node from the tree.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Search:</strong> Search for a specific node in the tree.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Traversal:</strong> Traverse the tree in different orders
              (e.g., inorder, preorder, postorder).
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Height:</strong> Get the height of the tree.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Size:</strong> Get the number of nodes in the tree.
            </li>
            <li className="leading-10 pl-4 text-md mb-1">
              <strong>Balance:</strong> Check if the tree is balanced.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Example Usage:</h3>
          <pre className="bg-gray-900 text-dimWhite p-4 py-12 rounded-md overflow-auto">
            {`
            // Define a node class for the binary tree
            class Node {
              constructor(data) {
                this.data = data;
                this.left = null;
                this.right = null;
              }
            }

            // Define the binary tree class
            class BinaryTree {
              constructor() {
                this.root = null;
              }

              // Insert a node into the tree
              insert(data) {
                const newNode = new Node(data);
                if (!this.root) {
                  this.root = newNode;
                } else {
                  this.insertNode(this.root, newNode);
                }
              }

              insertNode(node, newNode) {
                if (newNode.data < node.data) {
                  if (!node.left) {
                    node.left = newNode;
                  } else {
                    this.insertNode(node.left, newNode);
                  }
                } else {
                  if (!node.right) {
                    node.right = newNode;
                  } else {
                    this.insertNode(node.right, newNode);
                  }
                }
              }

              // Delete a node from the tree
              delete(data) {
                this.root = this.deleteNode(this.root, data);
              }

              deleteNode(node, data) {
                if (!node) return null;
                if (data < node.data) {
                  node.left = this.deleteNode(node.left, data);
                  return node;
                } else if (data > node.data) {
                  node.right = this.deleteNode(node.right, data);
                  return node;
                } else {
                  if (!node.left && !node.right) {
                    return null;
                  }
                  if (!node.left) {
                    node = node.right;
                    return node;
                  } else if (!node.right) {
                    node = node.left;
                    return node;
                  }
                  const minRightNode = this.findMinNode(node.right);
                  node.data = minRightNode.data;
                  node.right = this.deleteNode(node.right, minRightNode.data);
                  return node;
                }
              }

              findMinNode(node) {
                while (node.left) {
                  node = node.left;
                }
                return node;
              }

              // Search for a node in the tree
              search(data) {
                return this.searchNode(this.root, data);
              }

              searchNode(node, data) {
                if (!node) return null;
                if (data === node.data) return node;
                if (data < node.data) return this.searchNode(node.left, data);
                if (data > node.data) return this.searchNode(node.right, data);
              }

              // Traversal methods (inorder, preorder, postorder)

              // Get the height of the tree
              height() {
                return this.getHeight(this.root);
              }

              getHeight(node) {
                if (!node) return -1;
                const leftHeight = this.getHeight(node.left);
                const rightHeight = this.getHeight(node.right);
                return Math.max(leftHeight, rightHeight) + 1;
              }

              // Get the size of the tree
              size() {
                return this.getSize(this.root);
              }

              getSize(node) {
                if (!node) return 0;
                return this.getSize(node.left) + this.getSize(node.right) + 1;
              }

              // Check if the tree is balanced
              isBalanced() {
                return this.checkBalanced(this.root);
              }

              checkBalanced(node) {
                if (!node) return true;
                const leftHeight = this.getHeight(node.left);
                const rightHeight = this.getHeight(node.right);
                return Math.abs(leftHeight - rightHeight) <= 1 &&
                  this.checkBalanced(node.left) &&
                  this.checkBalanced(node.right);
              }
            }

            // Example usage:
            const bst = new BinaryTree();
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(3);
            bst.insert(7);
            bst.insert(12);
            bst.insert(18);
            // Tree:
            //        10
            //       /  \\
            //      5    15
            //     / \\   / \\
            //    3   7 12  18

            bst.delete(5);
            // Tree after deletion:
            //        10
            //       /  \\
            //      3    15
            //          /  \\
            //         12   18

            let searchResult = bst.search(12); // searchResult.data === 12
            let height = bst.height(); // height === 2
            let size = bst.size(); // size === 6
            let isBalanced = bst.isBalanced(); // isBalanced === true
            `}
          </pre>
          {/* <div>
            <img
              className="w-full h-[500px]"
              src="../../binary_tree.gif"
              alt="Binary Tree Visualization"
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default BinaryTreeDescription;
