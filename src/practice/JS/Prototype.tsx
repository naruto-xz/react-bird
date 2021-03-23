import React from "react";
const PrototypePractice = ()=> {
  /**
   * 基础对象Object原型
   */
  // @ts-ignore
  // Object.prototype.age = 24;
  // let obj = {}
  // // @ts-ignore
  // console.log(obj.age); //24
  // function person(){}
  // // @ts-ignore
  // console.log(person.age) //24
  // let date = new Date();
  // // @ts-ignore
  // console.log(date.age) //24

  /**
   * 函数对象原型
   */
  // function Person(){
  //
  // }
  // Person.prototype.age = 23;
  // // @ts-ignore
  // let person = new Person();
  // console.log(person.age);
  // console.log(person.hasOwnProperty(person.age))  //false


  return (
    <h5>PrototypePractice</h5>
  )
}
export default PrototypePractice;