//练习1 树的深度与广度遍历
import {tree, binaryTree} from './tree.js';
{
  function dfs(root){
    console.log(root.value);
    root.children?.forEach(child => {
      dfs(child);
    });
  }
  // dfs(tree) //abdecfg
}
{
  function bfs(root){
    let q = [root];
    while (q.length){
      const n = q.shift();
      console.log(n.value);
      n.children.forEach(child => {
        q.push(child);
      })
    }
  }
  // bfs(tree) //abcdefg
}

//前中后序遍历
{
  function preOrder(root){
    if(!root){
      return;
    }
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
  // preOrder(binaryTree)  //1245367
}

{
  function inorder(root){
    if(!root){
      return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
  }
  // inorder(binaryTree);  //4251637
}

{
  function postOrder(root){
    if(!root){
      return ;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
  }
  // postOrder(binaryTree); //4526731
}

//非递归版
{
  function preOrder(root){
    let arr = [];
    if(!root){
      return arr;
    }
    const stack = [root];
    while (stack.length){
      let n = stack.pop();
      arr.push(n.val);
      if(n.right){
        stack.push(n.right);
      }
      if(n.left){
        stack.push(n.left);
      }
    }
    return arr;
  }
  let res = preOrder(binaryTree)
  // console.log(res); //[1245367]
}

{
  function inorder(root){
    let arr = [];
    let stack = [];
    while (stack.length || root){
      while (root){
        stack.push(root);
        root = root.left;
      }
      let n = stack.pop();
      arr.push(n.val);
      root = n.right;
    }
    return arr;
  }
  let res = inorder(binaryTree);
  // console.log(res); //[4251637]
}

{
  function postOrder(root){
    if(!root){
      return ;
    }
    let stack = [root];
    let outStack = [];
    while (stack.length){
      let n = stack.pop();
      outStack.push(n);
      if(n.left){
        stack.push(n.left);
      }
      if(n.right){
        stack.push(n.right);
      }
    }
    while (outStack.length){
      let n = outStack.pop();
      console.log(n.val);
    }
  }
  postOrder(binaryTree);  //4526731
}