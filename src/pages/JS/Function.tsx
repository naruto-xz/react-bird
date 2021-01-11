import React from "react";
const FunctionPractice = ()=> {
  /**
   * ES5
   */
  //作为值传递,传递的是函数指针的引用
  // const fn = (x:any)=> {
  //   return x;
  // }
  // const fn1:any = (f:any, argument:any)=> {
  //   return f(argument)+1;
  // }
  // console.log(fn1(fn, 10))  //11

  //作为返回结果
  // const fn:any = (x:any)=> {
  //   return x;
  // }
  // const fn1:any = ()=> {
  //   return fn(10)+1
  // }
  // console.log(fn1())  //11

  //两个特殊对象arguments和this, (箭头函数没有arguments和this)
  //arguments
  // function fn(x:any){
  //   console.log(arguments[0]) //10
  // }
  // fn(10)
  //this指想，看所在的执行环境
  // let obj = {
  //   age: 23,
  //   fn(){
  //     console.log(this.age) //23
  //   }
  // }
  // obj.fn();

  //两个属性length与prototype
  // const fn = (x:any, y:any)=> {
  //   console.log(x,y)
  // }
  // console.log(fn.length)  //2 参数个数

  //prototype 函数的原型 原型上有两个特殊的方法call,apply

  /**
   * ES6
   */

  //箭头函数相关、默认参数、rest使用(获取多余参数，转化为数组)

  /**
   * 闭包
   */
  //1.读取其它函数内部变量的函数,下面就是通过闭包的形式读取了fn内部的变量x。
  // function fn(){
  //   let x = 1;
  //   return function fn1(){
  //     return x+1;
  //   }
  // }
  // let res = fn();
  // console.log(res()); //2

  // let fn = ()=> {
  //   let x = 1;
  //   let fn1 = ()=> {
  //     return x+1;
  //   }
  //   return fn1;
  // }
  // let res = fn();
  // console.log(res())  //2;

  //2.闭包的变量值始终保存在内存中
  // let fn = ()=> {
  //   let x = 1;
  //   let fn1 = ()=> {
  //     return x++;
  //   }
  //   return fn1;
  // }
  // let res = fn();
  // console.log(res()); //1
  // console.log(res()); //2

  // 3.优先使用自己外层包裹的作用域
  let fn = ()=> {
    let x = 1;
    let fn1 = ()=> {
      console.log(x); //1
    }
    return fn1
  }
  let f:any = fn();
  let fn2 = ()=> {
    let x = 2;
    return f();
  }
  fn2();

  return (
    <h5>FunctionPractice</h5>
  )
}
export default FunctionPractice;