//斐波那契数列
//0 1 1 2 3 5 8 13....
{
  function fib(n){
    if(n < 0){
      throw Error('输入的数字不能小于0');
    }
    if (n === 0 || n === 1) {
      return  n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  let res = fib(4);
  console.log(res); //3
}
{
  function fib(n){
    if(n < 0){
      throw Error('输入的数字不能小于0');
    }
    if (n === 0 || n === 1) {
      return  n;
    }
    let num1 = 0;
    let num2 = 1;
    let target = 0;
    for(let i = 0; i < n - 1; i++){
      target = num1 + num2;
      num1 = num2;
      num2 = target;
    }
    return target;
  }
  let res = fib(4);
  console.log(res); //3
}

//防抖、接流
{
  function debounce(fn, wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      clearTimeout(timeout);
      if(!timeout){
        timeout = setTimeout(()=> {
          fn.apply(context, rest);
        }, wait);
      }
    }
  }
}
{
  function throttle(fn, wait){
    let flag = false;
    return function (...rest){
      let context = this;
      if(!flag){
        flag = true;
        setTimeout(()=> {
          fn.call(context, rest);
          flag = false;
        }, wait);
      }
    }
  }
}

//去除字符串首尾空格
{
  let str = ' abc  d ';
  function remove(str){
    let reg = /(^\s*)|(\s*$)/g;
    str = str.replace(reg, '');
    return str;
  }
  let res = remove(str);
  console.log(res); //abc  d
}
//去除字符串中连续的两个空格
{
  let str = ' abc  d ';
  function remove(str){
    let reg = /\s{2,}/g;
    str = str.replace(reg, '');
    return str;
  }
  let res = remove(str);
  console.log(res); // abcd
}
//去除字符串中所有相同的字符
{
  let str = 'accc';
  function remove(str){
    let reg = /c/g;
    str = str.replace(reg, 'd');
    return str;
  }
  let res = remove(str);
  console.log(res); //addd
}

//对象的浅克隆
{
  let obj = {name: 'zs', person: {age: 23}};
  function clone(obj){
    let newObj = {};
    for(let key in obj){
      newObj[key] = obj[key];
    }
    return newObj;
  }
  let res = clone(obj);
  console.log(res.name);  //zs
}

//对象的深克隆
{
  let obj = {name: 'zs', person: {age: 23}};
  function clone(obj){
    if(typeof obj === 'object'){
      let newObj = obj.constructor === Array ? [] : {};
      for (let key in obj) {
        if(typeof obj[key] === 'object'){
          newObj[key] = clone(obj[key]);
        }else {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    } else {
      return obj;
    }
  }
  let res = clone(obj);
  console.log(res);
}

//自己实现一个call、apply、bind
{
  Function.prototype.myCall = function (context, ...args){
    context = context || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
  }

  Function.prototype.myApply = function (context, args){
    context = context || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
  }

  let obj = {age: 22};
  function test(num){
    return this.age + num;
  }
  // test.call(obj, 1);
  let res = test.myCall(obj, 1);
  console.log(res); //23
  let res1 = test.myApply(obj, [1]);
  console.log(res1); //23
}

{
  Function.prototype.myBind = function (context, ...args1){
    let _this = this;
    return function (...args2){
      return _this.apply(context, [...args1, ...args2]);
    }
  }
}

//实现一个发布、订阅模式
{
  function test(){

  }
}