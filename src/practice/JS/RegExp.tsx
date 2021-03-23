import React from "react";
const RegExpPractice = ()=> {
  //是否匹配
  //字面量模式
  // let reg = /b/g;
  // console.log(reg.test('abc')); //true
  //表达式模式
  // let reg = new RegExp('b', 'g');
  // console.log(reg.test('abc'))  //true

  //去除所有空格
  //  \s代表所有空白符 (space间距)
  // let str = '  a  bc  ';
  // let reg = /\s/g;
  // console.log(str.replace(reg, ''))

  //去除字符串首尾空白符的函数
  // ^以什么开头 $以什么结尾 *代表后面的所有 |代表或
  // let str = '  a bc  ';
  // let reg1 = /^\s*/g;
  // let reg2 = /\s*$/g;
  // let reg3 = /(^\s*)|(\s*$)/g
  // console.log(str.replace(reg1, '').replace(reg2, ''));
  // console.log(str.replace(reg3, ''))

  //去除连续的空格（长度大于等于2）
  // {n}代表次数 {n,}至少n次 ?表示0次或一次
  // let str = '  a   b c  ';
  // let reg = /\s{2,}/g;  //ab c
  // let reg = /\s?/g;  //abc
  // console.log(str.replace(reg, ''))

  //替换所有
  // let str = 'accc';
  // let reg = /c/g;
  // let res = str.replace(reg, '');
  // console.log(res);

  return (
    <h5>RegExpPractice</h5>
  )
}
export default RegExpPractice;