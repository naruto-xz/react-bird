//1.斐波那契数列(根据该规则，返回第n个斐波那契数)
//0 1 1 2 3 5 8 13....
{
  /**
   * 公式递归的缺点在于进行了大量的重复运算
   */
  function fib(n){
    if(n === 0 || n === 1){
      return n
    }
    return fib(n - 1) + fib(n - 2)
  }
  let res = fib(4);
  // console.log(res); //第4个斐波那契数为3
}

{
  /**
   * 利用递推法进行优化
   */
  function fib(n){
    if(n === 0 || n === 1){
      return n;
    }
    let f0 = 0;
    let f1 = 1;
    let curFib = 0;
    for(let i = 0; i < n - 1; i++){
      curFib = f0 + f1;
      f0 = f1;
      f1 = curFib;
    }
    return curFib;
  }
  let res = fib(4);
  // console.log(res); //第4个斐波那契数为3
}

//2、防抖(debounce) (非立即执行版)
//所谓防抖，就是指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
{
  function debounce(fn,wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      if(timeout){
        clearTimeout(timeout);
      }
      timeout = setTimeout(()=> {
        fn.apply(context, rest);
      }, wait);
    }
  }
}
{
  //(立即执行版)
  function debounce(fn,wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      if(timeout){
        clearTimeout(timeout);
      }
      let now = !timeout;
      timeout = setTimeout(()=> {
        timeout = null;
      }, wait);
      if(now){
        fn.apply(context, rest);
      }
    }
  }
}

//3、节流(throttle)
//所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。
{
  function throttle(fn, wait){
    let timeout = null;
    return function (...rest){
      let context = this;
      if(!timeout){
        timeout = setTimeout(()=> {
          timeout = null;
          fn.apply(context, rest)
        }, wait)
      }
    }
  }
}

//4.实现深浅克隆
//(浅克隆之所以被称为浅克隆，是因为对象只会被克隆最外部的一层,至于更深层的对象,则依然是通过引用指向同一块堆内存.)
/**
 * 浅拷贝：创建一个新的对象，遍历一遍旧对象，把第一层的键值依次赋给新对象
 */
{
  function shallowClone(obj){
    let cloneObj = {};
    for(let key in obj){
      cloneObj[key] = obj[key];
    }
    return cloneObj;
  }

  //可以实现浅拷贝
  let o = {age: 23};
  let cloneObj = shallowClone(o);
  cloneObj.age = 24;
  // console.log(o); //{age: 23}

  //无法实现深拷贝
  let o1 = {age: 23, person: {name: 'zs'}};
  let cloneObj1 = shallowClone(o1);
  cloneObj1.person.name = 'ls';
  // console.log(o1); //{age: 23, person: {name: 'ls'}}

}
/**
 * 深拷贝：如果对象的值还是对象则继续深度递归遍历，直到不是。
 * （考虑基础类型和引用类型)
 * （注意区分数组和对象)
 */
//使用for in会遍历对象和数组上所有的可枚举属性,包括原型上的属性,使用hasOwnProperty()方法可以判断某属性是不是该对象的实例属性
{
  function deepClone(obj){
    if(typeof obj === 'object'){
      let cloneObj = obj.constructor === Array ? [] : {};
      for (let key in obj){
        if(obj.hasOwnProperty(key)){
          if(typeof obj[key] === 'object'){
            cloneObj[key] = deepClone(obj[key]);
          }else {
            cloneObj[key] = obj[key];
          }
        }
      }
      return cloneObj;
    }else {
      let cloneObj = obj;
      return cloneObj;
    }
  }

  let o = {age: 23, person: {name: 'zs'}};
  let cloneObj = deepClone(o);
  cloneObj.person.name = 'ls';
  // console.log(o)  //{age: 23, person: {name: 'zs'}}

  let o1 = {age: 23, person: {name: [1,2,3]}}
  let cloneObj1 = deepClone(o1);
  cloneObj1.person.name = [1];
  // console.log(o1)  //{age: 23, person: {name: [1,2,3]}}
}
/**
 * JSON序列化拷贝的缺点
 * 1.对于RegExp、Date、函数类型都是不安全的
 * 2.会丢失 constructor，所有的构造函数都指向 Object
 * 3.对象有循环引用,会报错
 *
 * 因此json序列化克隆的方法仅仅适用于一些简单的引用数据类型。
 */
{
  function Person(name) {
    this.name = name;
  }
  const Jack = new Person('Jack');
  const obj = {
    a: 1,
    b: function (arg) {
      console.log('我是独一无二的，json复制不了我');
    },
    c: {
      d: 3,
      e: {
        f: new Array(8),
        g: {
          h: 5
        }
      }
    },
    date: [new Date(1536627600000), new Date(1540047600000)],
    reg: new RegExp('\\w+'),
    num: [NaN, Infinity, -Infinity],
    person: Jack,
  };
  //json方法克隆
  let obj2 = JSON.parse(JSON.stringify(obj));
  // console.log(obj);
  // console.log(obj2);
}

//5、数组的去重、扁平、最值
{
  //普通数组去重
  let arr = [1,2,2,3];
  let res = [...new Set(arr)];
  // console.log(res);

  //对象数组去重
  let arr1 = [{age: 23, name: 'zs'},{age: 23, name: 'zs'},{age: 23, name: 'ls'}];
  let obj = {};
  let res1 = arr1.reduce((pre, cur)=> {
    if(!obj[cur.name]){
      pre.push(cur);
      obj[cur.name] = true;
    }
    return pre;
  }, []);
  // console.log(res1);
}
{
  //数组扁平内置方法
  let arr = [1,[2,[3]]];
  let res = arr.flat(2);
  // console.log(res); //[1,2,3]

  //数组扁平自定义方法
  let arr1 = [1,[2,[3]]];
  function flat(arr){
    let arr2 = [];
    for(let i = 0; i<arr.length; i++){
      if(arr[i].constructor === Array){
        arr2 = arr[i].constructor === Array ? arr2.concat(flat(arr[i])) : arr2.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
  let res1 = flat(arr1);
  // console.log(res1);

  //使用reduce简化
  let arr3 = [1,[2,[3]]];
  function flat1(arr){
    return arr.reduce((pre, cur)=>{
      if(cur.constructor === Array){
        pre = pre.concat(flat1(cur));
      } else {
        pre.push(cur);
      }
      return pre;
    }, [])
  }
  let res2 = flat1(arr3);
  // console.log(res2);
}
{
  //数组最值
  let arr = [1,2,2,3];
  let res = Math.max(...arr);
  console.log(res); //3
}