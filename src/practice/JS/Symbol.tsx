import React from "react";
const SymbolPractice = ()=> {
  //创建唯一的变量值
  let res = Symbol(1);
  console.log(res); //Symbol(1) //就是Symbol类型

  return (
    <h5>SymbolPractice</h5>
  )
}
export default SymbolPractice;