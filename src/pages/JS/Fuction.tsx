import React from "react";
const FuctionPractice = ()=> {
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

  return (
    <h5>FuctionPractice</h5>
  )
}
export default FuctionPractice;