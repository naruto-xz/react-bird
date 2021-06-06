//二叉树

/**
 * 前序遍历 (根左右)
 * 对于前序，就是先访问（输出）根节点。而递归左，递归右侧，会优先递归左侧。直到没有左节点
 */
{
  let tree = [1,null,2,3];
  function preorderTraversal(root, arr = []){
    if (root) {
      arr.push(root.val);
      preorderTraversal(root.left, arr);
      preorderTraversal(root.right, arr);
    }
    return arr;
  }
  let res = preorderTraversal(tree);
  console.log(res);
}