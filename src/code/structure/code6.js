// 树

//深度优先遍历dfs(Depth-First-Search)

{
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
  dfs(tree);
}


//二叉树

/**
 * 前序遍历 (根左右)
 * 对于前序，就是先访问（输出）根节点。而递归左，递归右侧，会优先递归左侧。直到没有左节点
 */
// {
//   let tree = [1,null,2,3];
//   function preorderTraversal(root, arr = []){
//     if (root) {
//       arr.push(root.val);
//       preorderTraversal(root.left, arr);
//       preorderTraversal(root.right, arr);
//     }
//     return arr;
//   }
//   let res = preorderTraversal(tree);
//   console.log(res);
// }
