// 树

const tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
        },
        {
          value: 'e'
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f'
        },
        {
          value: 'g'
        }
      ]
    }
  ]
};

//深度优先遍历dfs(Depth-First-Search)
{
  //自己
  // const dfs = function (root) {
  //   console.log(root.value);
  //   function loop(children){
  //     children.forEach(item => {
  //       console.log(item.value);
  //       if (item.children && item.children.length) {
  //         loop(item.children);
  //       }
  //     })
  //   }
  //   loop(root.children);
  // };
  // dfs(tree);

  //进阶
  // const dfs = function (root) {
  //   console.log(root.value);
  //   root.children && root.children.forEach(child => {
  //     dfs(child)
  //   })
  // };
  // dfs(tree);

  //优化
  const dfs = function (root) {
    console.log(root.value);
    root.children?.forEach(dfs)
  };
  // dfs(tree);  //abdecfg
}

//广度优先遍历bfs(breadth-First-Search)
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
import {binaryTree} from './tree.js'

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
  function inoder(root){
    if(!root){
      return;
    }
    inoder(root.left);
    console.log(root.val);
    inoder(root.right);
  }
  // inoder(binaryTree); //4251637
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
  postorder(binaryTree);  //4526731
}