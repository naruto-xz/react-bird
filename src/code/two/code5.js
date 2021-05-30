//1.斐波那契数列
// 0 1 1 2 3 5 8 13

{
  function fib(n){
    if (n < 0) {
      throw new Error('输入的数字不能小于0')
    }
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2); //后一位等于前两位之和
  }
  let res = fib(6);
  console.log(res); //从0开始，第6位是8
}

{
  let curFib = 0;
  function fib(n){
    if (n < 0) {
      throw new Error('输入的数字不能小于0')
    }
    if (n < 2) {
      return n;
    }
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i < n; i++) {
      curFib = f0 + f1; //下一位等于上两位只和，再下一位等于之前往前进一位的值只和
      f0 = f1;
      f1 = curFib;
    }
    return curFib;
  }
  let res = fib(6);
  console.log(res); //8
}

//2.debounce 防抖

{
  function debounce(fn, wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      clearTimeout(timeout);
      timeout= setTimeout(()=> {
        fn.apply(context, rest);
      }, wait);
    }
  }
  function add(num){
    console.log(num);
  }
  let test = debounce(add, 3000);
  test(123);
}

//3. throttle 截流
{
  function throttle(fn, wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      if (!timeout) {
        timeout = setTimeout(()=> {
          timeout = null;
          return fn.apply(context, rest);
        }, wait)
      }
    }
  }
  function add(num){
    console.log(num);
  }
  let test = throttle(add, 3000);
  test(456);
}

//4.树，拉平 (如何把所有的选中项层级扁平化，即扁平化成下面的结构：) (递归思想，判断有无子节点了)
//[{"name": "类目10-层级2>类目100-层级3>类目1000-层级4"}]
{
  let tree = [
    {
      "checked": true,
      "id": 1,
      "level": 1,
      "name": "类目1-层级1",
      "pid": "",
      "childList": [{
        "id": 10,
        "level": 1,
        "name": "类目10-层级2",
        "pid": 1,
        "checked": true,
        "childList": [{
          "id": 100,
          "level": 3,
          "name": "类目100-层级3",
          "pid": 10,
          "checked": true,
          "childList": [{
            "id": 1000,
            "level": 4,
            "name": "类目1000-层级4",
            "pid": 100,
            "checked": true,
          },
            {
              "id": 1001,
              "level": 4,
              "name": "类目1001-层级4",
              "pid": 100
            }
          ]
        },
          {
            "id": 101,
            "level": 3,
            "name": "类目101-层级3",
            "pid": 10,
            "childList": [{
              "id": 1003,
              "level": 4,
              "name": "类目1003-层级4",
              "pid": 101
            },
              {
                "id": 1004,
                "level": 4,
                "name": "类目1004-层级4",
                "pid": 101
              }
            ]
          }
        ]
      },
        {
          "id": 11,
          "level": 2,
          "name": "类目11-层级2",
          "pid": 1,
          "childList": [{
            "id": 200,
            "level": 3,
            "name": "类目200-层级3",
            "pid": 11,
            "childList": [{
              "id": 2000,
              "level": 4,
              "name": "类目2000-层级4",
              "pid": 200
            },
              {
                "id": 2001,
                "level": 4,
                "name": "类目2001-层级4",
                "pid": 200
              }
            ]
          },
            {
              "id": 201,
              "level": 3,
              "name": "类目201-层级3",
              "pid": 11,
              "childList": [{
                "id": 2002,
                "level": 4,
                "name": "类目2002-层级4",
                "pid": 201
              },
                {
                  "id": 2003,
                  "level": 4,
                  "name": "类目2003-层级4",
                  "pid": 201
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "checked": false,
      "id": 2,
      "level": 1,
      "name": "类目2-层级1",
      "pid": "",
      "childList": [{
        "id": 50,
        "level": 1,
        "name": "类目50-层级2",
        "pid": 2,
        "childList": [{
          "id": 501,
          "level": 3,
          "name": "类目501-层级3",
          "pid": 50,
          "childList": [{
            "id": 5001,
            "level": 4,
            "name": "类目5001-层级4",
            "pid": 501
          },
            {
              "id": 5002,
              "level": 4,
              "name": "类目5002-层级4",
              "pid": 501
            }
          ]
        },
          {
            "id": 502,
            "level": 3,
            "name": "类目502-层级3",
            "pid": 50,
            "childList": [{
              "id": 5003,
              "level": 4,
              "name": "类目5003-层级4",
              "pid": 502
            },
              {
                "id": 5004,
                "level": 4,
                "name": "类目5004-层级4",
                "pid": 502
              }
            ]
          }
        ]
      },
        {
          "id": 60,
          "level": 2,
          "name": "类目60-层级2",
          "pid": 2,
          "childList": [{
            "id": 600,
            "level": 3,
            "name": "类目600-层级3",
            "pid": 60,
            "childList": [{
              "id": 6000,
              "level": 4,
              "name": "类目6000-层级4",
              "pid": 200
            },
              {
                "id": 6001,
                "level": 4,
                "name": "类目6001-层级4",
                "pid": 200
              }
            ]
          },
            {
              "id": 601,
              "level": 3,
              "name": "类目601-层级3",
              "pid": 13,
              "childList": [{
                "id": 6002,
                "level": 4,
                "name": "类目6002-层级4",
                "pid": 601
              },
                {
                  "id": 6003,
                  "level": 4,
                  "name": "类目6003-层级4",
                  "pid": 601
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  let arr = []
  function treeToList(tree){
    tree.forEach(child => {
      if (child.checked) {
        arr.push(child.name)
        if (child.childList && child.childList.length) {
          treeToList(child.childList)
        }
      }
    })
  }
  treeToList(tree);
  console.log(arr);
}

//5.生成树
{
  let flatTree = [
    {id: 1, title: 'parent 1', parent_id: 0},
    {id: 2, title: 'parent 1-1', parent_id: 1},
    {id: 3, title: 'parent 1-2', parent_id: 1},
    {id: 4, title: 'leaf 1-1-1', parent_id: 2},
    {id: 5, title: 'leaf 1-1-2', parent_id: 2},
    {id: 6, title: 'leaf 1-2-1', parent_id: 3},
    {id: 7, title: 'leaf 1-2-2', parent_id: 3},
  ]
  let tree = [];
  flatTree.forEach(item => {
    if (item.parent_id === 0) {
      tree.push(item);
      loop(flatTree, item, item.id)
    }
  })

  function loop(data, parentItem, parentId){
    parentItem.child = parentItem.child ? parentItem.child : [];
    data.forEach(item => {
      if (item.parent_id === parentId) {
        parentItem.children.push(item);
        loop(data, item, item.id);
      }
    })
  }
  console.log(tree);
}