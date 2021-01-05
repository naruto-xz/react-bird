import React from "react";
const NumberPractice = ()=> {
  /**
   * ES5
   */
  //四舍五入保留两位小数
  // let n1 = 3.14149
  // let res1 =  n1.toFixed(2);
  // console.log(res1);  //3.14
  //字符串转数字
  // let n2 = '123.4';
  // console.log(Number(n2));  //123.4
  // console.log(parseInt(n2));  //123
  // console.log(parseFloat(n2));  //123.4
  //取整
  // let n3 = 3.14159;
  // console.log(Math.floor(n3));  //3
  // console.log(Math.ceil(n3));   //4
  // console.log(Math.round(n3));   //3
  //求数组中的最大值
  // let arr = [3,6,9];
  // console.log(Math.max.apply(null, arr)); //9
  // console.log(Math.min.call(null, ...arr)); //3
  // console.log(Math.max(...arr));  //9
  // console.log(Math.min(...arr));  //3

  /**
   * ES6
   */
  let num = 3.14159;
  //判断是否为整数
  console.log(Number.isInteger(num)) //false

  return (
    <h5>NumberPractice</h5>
  )
}
export default NumberPractice;