import React from "react";
const StringPractice = ()=> {
  /**
   * ES5
   */
  //字符串转数组
  // let str1 = 'abcde';
  // let res = str1.split('');
  // console.log(res);  //["a", "b", "c", "d", "e"]
  //字符串复制
  // let str2 = 'abcde';
  // let res1 = str2.slice(1,3); //bc
  // // let res1 = str2.slice(-2); //de
  // console.log(res1);
  //字符串截取
  // let str3 = 'abcde';
  // console.log(str3.substr(1,3));  //bcd
  // let str3 = '13571578888';
  // let res3 = str3.substr(0,3) + "****" + str3.substr(-4);
  // console.log(res3);
  //字符串替换、删除、插入
  // let str4 = 'abcde';
  // console.log(str4.replace('c', 'f'));
  // console.log(str4.replace('c', ''));  //abde
  // console.log(str4.replace('c', 'cf'));  //abcfde
  //字符串包含
  // let str6 = 'abcde';
  // console.log(str6.indexOf('c')); //2

  /**
   * ES6
   */
  // let str:any = 'abcde';
  //字符串包含
  // console.log(str.includes('c'));
  //遍历
  // for(let i of str){
  //   console.log(i)
  // }
  //解构
  // console.log(...str);  //"a", "b", "c", "d", "e"
  // console.log([...str]);  //["a", "b", "c", "d", "e"]
  //模版字符串
  // let res = `${str}f`;
  // console.log(res); //'abcdef'

  return (
    <h5>StringPractice</h5>
  )
}
export default StringPractice;