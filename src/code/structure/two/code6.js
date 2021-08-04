/**
 * 手写树转数组
 * 1.先把树结构转化为数组。
 * 2.写一个深度递归函数，判断是否有树的子节点，有的话则遍历该子节点，往数组中push需要的数据结构。
 * 3.然后继续深度递归当前子节点，看它下面是否还有子节点，直到children为空。
 * 4.一层遍历到底之后，后面的层级会继续重复当前的循环取值规则。
 */
{
  let tree = {
    id: 1,
    val: '学校',
    parentId: null,
    children: [
      {
        id: 2,
        val: "班级1",
        parentId: 1,
        children: [
          {
            id: 4,
            val: "学生1",
            parentId: 2,
          }
        ]
      },
      {
        id: 3,
        val: "班级2",
        parentId: 1,
        children: [
          {
            id: 5,
            val: "学生2",
            parentId: 3,
          },
          {
            id: 6,
            val: "学生3",
            parentId: 3,
          }
        ]
      }
    ]
  }
  function treeToArr(tree){
    const arr = [];
    loop([tree]);
    function loop(children){
      children.forEach((item) => {
        arr.push({
          id: item.id,
          val: item.val,
          parentId: item.parentId
        })
        if(item.children && item.children.length){
          loop(item.children);
        }
      })
    }
    return arr;
  }
  let res = treeToArr(tree);
  console.log(res);
}

/**
 * 手写数组转树
 *
 * 1.先判断取出跟节点
 * 2.写一个深度遍历的函数，传入调用(传入要遍历的数组，传入要生成的树，传入父节点)。
 * 3.判断子节点是否等于父节点，等于的话就把子push到父children中去，然后继续递归深度遍历子节点，直到不符合条件为止。
 * 4.一层遍历到底之后，后面的层级会继续重复当前的循环取值规则。
 */
{
  let arr = [
    {
      id: 1,
      val: "学校",
      parentId: null,
    },
    {
      id: 2,
      val: "班级1",
      parentId: 1,
    },
    {
      id: 3,
      val: "班级2",
      parentId: 1,
    },
    {
      id: 4,
      val: "学生1",
      parentId: 2,
    },
    {
      id: 5,
      val: "学生2",
      parentId: 3,
    },
    {
      id: 6,
      val: "学生3",
      parentId: 3,
    },
  ];
  function arrToTree(arr){
    let tree = {};
    arr.forEach((child)=> {
      if(!child.parentId){
        tree = child;
        loop(arr, tree, tree.id)
      }
    })
    return tree;
  }
  function loop(arr, tree, parentId){
    tree.children = [];
    arr.forEach(child => {
      if(child.parentId === parentId){
        tree.children.push(child);
        loop(arr, child, child.id);
      }
    })
  }

  let res = arrToTree(arr);
  console.log(res);
}