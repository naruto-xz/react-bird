import React from "react";
const SetPractice = ()=> {
  //创建、增、删、改、查、判断、清空
  //创建
  let arr:any = new Set([1,2]);
  // console.log(arr);  //{1,2}
  //增
  // arr.add(3)
  // console.log(arr);  //{1,2,3}
  //删
  // arr.delete(2)
  // console.log(arr);  //{1}
  //改(改会稍微麻烦一点，要变通一下,先转化为另外一个数组，然后再改变)
  // let arr1 = [...arr];
  // let res = arr1.map((item:any) => item*2)
  // console.log(res); //[2,4]
  // console.log(new Set(res));  //{2,4}
  // let arr1 = [...arr];
  // arr1.splice(1,1,3)
  // console.log(arr1); //[1,3]
  // console.log(new Set(arr1))  //{1,3}
  //查
  // let arr1 = [...arr];
  // console.log(arr1[1]); //2
  //判断
  // console.log(arr.has(2)) //true
  //清空
  // arr.clear();
  // console.log(arr); //{}
  // console.log(arr.size); //0
  // console.log(Array.from(arr))  //[]
  //遍历
  // let arr:any = new Set(['a','b']);
  // console.log(arr.keys()) //{a,b}
  // console.log(arr.values()) //{a,b}
  // for(let key of arr.keys()){
  //   console.log(key)  //a,b
  // }
  //解构、赋值
  // let res = [...arr];
  // console.log(res); //[1,2]
  //去重
  // let arr1 = [1,2,2,3]
  // @ts-ignore
  // let res = [...new Set(arr1)];
  // console.log(res); //[1,2,3]

  return (
    <h5>SetPractice</h5>
  )
}
export default SetPractice;