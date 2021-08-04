/**
 *  树
 */

import {tree,binaryTree} from './tree.js';

/**
 * 深度优先遍历dfs(Depth-First-Search)
 * 1.访问根节点
 * 2.对根节点的children挨个进行深度优先遍历
 */
{
  const dfs = function (root) {
    console.log(root.value);
    root.children?.forEach((item)=>{
      dfs(item);
    })
  };
  // dfs(tree);  //abdecfg
}

/**
 * 广度优先遍历bfs(breadth-First-Search)
 * 1.新建一个队列
 * 2.把队头出队伍并访问
 * 3.把队头的children挨个入队
 * 4.重复2，3步，直到队列为空
 */
{
  const bfs = (root)=> {
    const q = [root];
    while (q.length) {
      const n = q.shift();
      console.log(n.value);
      n.children?.forEach(item => {
        q.push(item);
      })
    }
  }
  // bfs(tree);  //abcdefg
}


//二叉树

/**
 * 前序遍历 (根左右)
 */
{
  function preorder(root){
    if (!root) {
      return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  // preorder(binaryTree); //1245367
}

/**
 * 中序遍历 (左根右)
 */
{
  function inorder(root){
    if(!root){
      return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
  }
  // inorder(binaryTree); //4251637
}

/**
 * 后序遍历 (左右根)
 */
{
  function postorder(root){
    if(!root){
      return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
  }
  // postorder(binaryTree); //4526731
}

//非递归版
{
  function preorder(root){
    if(!root){
      return ;
    }
    let stack = [root];
    while (stack.length) {
      let n = stack.pop();
      console.log(n.val);
      if (n.right) {
        stack.push(n.right);
      }
      if (n.left) {
        stack.push(n.left);
      }
    }
  }
  // preorder(binaryTree); //1245367
}

{
  function inorder(root){
    if(!root){
      return;
    }
    let stack = [];
    let p = root;
    while (stack.length || p){
      while (p){
        stack.push(p);
        p = p.left;
      }
      let n = stack.pop();
      console.log(n.val);
      p = n.right;
    }
  }
  // inorder(binaryTree);  //4251637
}

{
  function postorder(root){
    if(!root){
      return ;
    }
    const stack = [root];
    const outStack = [];
    while (stack.length){
      let n = stack.pop();
      outStack.push(n);
      if (n.left) {
        stack.push(n.left);
      }
      if (n.right) {
        stack.push(n.right);
      }
    }
    while (outStack.length){
      let n = outStack.pop();
      console.log(n.val);
    }
  }
  // postorder(binaryTree);  //4526731
}