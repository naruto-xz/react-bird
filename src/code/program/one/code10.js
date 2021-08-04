{

}

//6.柯里化
/**
 * 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 */
/**
 * add(1, 2, 3) // 6
 * add(1) // 1
 * add(1)(2) // 3
 * add(1, 2)(3) // 6
 * add(1)(2)(3) // 6
 * add(1)(2)(3)(4) // 10
 */
{
  //参数定长的柯里化
  function add(a,b,c){
    return [...arguments].reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }

  function curring(fn){
    let presetArgs = [].slice.call(arguments,1);
    return function (...rest){
      // const allArgs = [...presetArgs, ...rest];
      // const allArgs = [].slice.call(arguments);

      const restArgs = [].slice.call(arguments)
      const allArgs = [...presetArgs, ...restArgs]
      if(allArgs.length >= fn.length){
        return fn.apply(this, [...presetArgs, ...rest]);
      }else {
        return curring.apply(null,fn,[...presetArgs, ...rest]);
        // return curring.call(null, fn, ...[...presetArgs, ...rest])
      }
    }
  }
  // let add1 = curring(add);
  // let res = add1(1,2,3)
  // let res = add1(1)(2);
  // console.log(res);
  // let res = add2();
  // console.log(res);
  // let add1 = curring(add);
  // add1(1,2,3);
}

/**
 * 手写promise
 */
{
  // new Promise((resolve, reject)=>{
  //   // resolve(21);
  //   reject(22);
  // }).then(value => {
  //   console.log(value);
  // })

  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  function MyPromise(executor){
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value)=> {
      if(this.status === PENDING){
        this.status = FULFILLED;
        this.value = value;
      }
      this.onFulfilledCallbacks.forEach(fn => {
        fn();
      })
    }

    const reject = (reason)=> {
      if(this.status === PENDING){
        this.status = REJECTED;
        this.reason = reason;
      }
      this.onRejectedCallbacks.forEach(fn => {
        fn();
      })
    }

    try {
      executor(resolve, reject)
    } catch(reason) {
      reject(reason);
    }
  }
  MyPromise.prototype.then = function (onFulfilled, onRejected){
    switch (this.status){
      case 'fulfilled':
        setTimeout(()=> {
          const x = onFulfilled(this.value);
        }, 0);
        break;
      case 'rejected':
        setTimeout(()=> {
          onFulfilled(this.reason)
        }, 0);
        break;
      case 'pending':
        this.onFulfilledCallbacks.push(()=> {
          setTimeout(()=> {
            onFulfilled(this.value)
          }, 0)
        });
        this.onRejectedCallbacks.push(()=> {
          setTimeout(()=> {
            onRejected(this.reason)
          }, 0)
        });
        break;
    }
  }
  MyPromise.prototype.catch = function (onRejected){
    return this.then(null, onRejected);
  }

  MyPromise.prototype.finally = function (fn){
    return this.then(value => {
      fn();
      return value;
    }, reason => {
      fn();
      throw reason;
    });
  }

  // console.log(1);
  // new MyPromise((resolve, reject)=>{
  //   reject(18);
  // }).then((res) => {
  //   console.log(res);
  // })
  // console.log(2);


  // new Promise1(resolve).then();
}

/**
 * 手撕call、apply、bind
 *
 * call,apply
 * 1.接受一个传入执行的对象；该对象有就是该对象，没有就是window
 * 2.原型对象上的this指向调用它的函数，把该this赋给该对象的一个属性上形成一个新函数，为了避免冲突，选择用Symbol
 * 3.执行该对象上的函数，传入剩余参数。
 * 4.apply和call的区别就在于调用时传入的是数组。
 */
{
  Function.prototype.myCall = function (context, ...args){
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn];
    return result;
  }

  Function.prototype.myApply = function (context, args){
    context = context || window;
    let fn = Symbol();
    context[fn] = this;
    let result;
    if(!args){
      result = context[fn]()
    } else {
      result = context[fn](...args)
    }
    delete context[fn];
    return result;
  }

  function a(id1,id2){
    return this.id + id1 + id2
  }
  let obj = {
    id: 1
  }
  window.id = 10;
  // console.log(a.call(obj, 2,3)); //6
  // console.log(a.myCall(obj, 2,3)); //6
  // console.log(a.apply(obj, [2,3])); //6
  // console.log(a.myApply(obj, [2,3])); //6
}
/**
 * bind的实现可以基于call和apply的基础上实现。
 * 1.还是先接受一个传入的对象，利用call或apply传入该对象this就指向了该对象;
 * 2.返回一个执行函数。
 * 3.最外面的函数和返回的函数均可以传参数，调用时取两个参数的和。
 */
{
  Function.prototype.myBind = function (context, ...args1){
    let _this = this;
    return function (...args2){
      // return _this.call(context, ...args1, ...args2);
      return _this.apply(context, [...args1, ...args2]);
    }
  }
  function a(id1,id2){
    console.log(this.id + id1 + id2);
  }
  let obj = {
    id: 1
  }
  let b = a.myBind(obj, 2);
  // b(3); //6
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
    arr.forEach(child => {
      if(!child.parentId){
        tree = child;
        loop(arr, tree, tree.id);
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
    let arr = [];
    loop([tree])
    function loop(children){
      children.forEach(child => {
        arr.push({
          id: child.id,
          val: child.val,
          parentId: child.parentId
        })
        if(child.children && child.children.length){
          loop(child.children);
        }
      })
    }
    return arr;
  }
  let res = treeToArr(tree);
  console.log(res);
}