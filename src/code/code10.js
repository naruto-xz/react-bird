//实现 add(1)(2)(3)
//函数柯里化概念： 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术。

//粗暴版
{
  function add(a){
    return function(b){
      return function (c){
        return a+b+c;
      }
    }
  }
  let res = add(1)(2)(3); //6
  console.log(res);
}

//函数参数长度固定
{
  const curry = (fn)=> {
    let args = [];
    return function temp(...rest){
      args.push(...rest);
      if (args.length === fn.length) {  //把参数积攒和执行函数所需参数一样了，再统一调用函数
        let res = fn.apply(this, args);
        args = [];
        return res;
      } else {
        return temp;
      }
    }
  }
  const add = (a, b, c) => a + b + c;
  let curryAdd = curry(add);
  console.log(curryAdd(1)(2)(3)); //6
  console.log(curryAdd(1, 2)(3)); //6
  console.log(curryAdd(1)(2, 3)); //6
}

//函数参数长度不确定
{
  function curry(fn){
    let args = [];
    return function temp(...rest){
      if (rest.length) {  //只要有参数就一直往里面push，直到没有参数了再执行
        args.push(...rest);
        return temp;
      } else {
        let res = fn.apply(this, args);
        args = [];
        return res;
      }
    }
  }
  const adding = (...rest) => rest.reduce((pre, cur)=> pre + cur)
  let curryAdd = curry(adding);
  console.log(curryAdd(1)(2)(3)(4, 5)()); //15
  console.log(curryAdd(1)(2)(3, 4, 5)()); //15
  console.log(curryAdd(1)(2, 3, 4, 5)()); //15
}

//实现链式调用