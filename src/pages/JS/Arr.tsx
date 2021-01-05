import React from "react";
const ArrPractice = ()=> {
  /**
   * ES5
   */
  //增、删、改 (改变原数组)
  // let arr1 = ['a','b','c'];
  //增
  // arr1.splice(1,0, 'd')
  // console.log(arr1);  //["a", "d", "b", "c"]
  //删
  // let res = arr1.splice(1,1)
  // console.log(res); //['b']
  // console.log(arr1);  //['a', 'c']
  //改
  // arr1.splice(1,1, 'd')
  // console.log(arr1);  //["a", "d", "c"]
  //复制
  // let arr1 = ['a','b','c'];
  // let res = arr1.slice(1,2);
  // console.log(res); //['b']
  // console.log(arr1);  //['a','b','c']
  //循环处理(foreach, map,filter,some,every,reduce)
  //数组去重
  // let arr = [1,2,2,3,3];
  // console.log(Array.from(new Set(arr)));
  // let arr1:any = [];
  // arr.forEach(item => {
  //   if (arr1.indexOf(item) === -1) {
  //     arr1.push(item)
  //   }
  // })
  // console.log(arr1);
  // let obj:any = {};
  // let arr1:any = [];
  // arr.forEach(item => {
  //   if (!obj[item]) {
  //     arr1.push(item);
  //     obj[item] = true;
  //   }
  // })
  // console.log(arr1);
  // let res = arr.reduce((pre:any,cur)=> {
  //   if (pre.indexOf(cur) === -1) {
  //     pre.push(cur);
  //   }
  //   return pre;
  // }, []);
  // console.log(res);

  // let arr1 = [{name:"a",age:1},{name:"a",age:1},{name:"b",age:3}];
  // let obj:any = {};
  // let arr2:any = [];
  // arr1.forEach(item => {
  //   if (!obj[item.age]) {
  //     arr2.push(item);
  //     obj[item.age] = true;
  //   }
  // })
  // console.log(arr2);
  // let res:any = arr1.reduce((pre, cur)=> {
  //   if (!obj[cur.age]) {
  //     // @ts-ignore
  //     pre.push(cur);
  //     obj[cur.age] = true
  //   }
  //   return pre;
  // }, [])
  // console.log(res);

  //数组累加
  // let res = arr.reduce((pre,cur)=> {
  //   return pre+cur;
  // }, 1)
  // console.log(res); //12

  /**
   * ES6
   */
  // let arr:any = ['a','b','c'];
  //数组去重
  // let arr1 = ['a','b', 'b', 'c']
  // let res = new Set(arr1);
  // console.log(res); //{"a", "b", "c"} //set类型的数据结够
  // console.log(Array.from(res)); //["a", "b", "c"] //真正的数组数据结构
  // 包含
  // console.log(arr.includes('b')); //true
  // 查找
  // let res = arr.find((item: any) => item === 'c');
  // console.log(res); //'c'
  //循环
  // for(let i of arr.keys()){
  //   console.log(i)  //0,1,2
  // }
  //数组解构
  // let arr = ['a','b','c'];
  // let res = [...arr, 'd'];
  // console.log(res); //['a','b','c','d']
  // let [x ,y] = [...arr];  //扩展预算符+解构赋值，相当于赋予变量x,y对应的值
  // let [x ,y] = arr;  //纯解构赋值，相当于赋予变量x,y对应的值
  // console.log(x); //'a'
  // console.log(y); //'b'

  return (
    <h5>ArrPractice</h5>
  )
}
export default ArrPractice;