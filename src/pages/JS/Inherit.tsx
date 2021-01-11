import React from "react";
const InheritPractice = ()=> {
  /**
   * 创建对象的几种方式
   */
  //1.对象字面量
  // let obj = {
  //   name: 'zs',
  //   age: 23
  // }

  //2.工厂模式
  // function factory(name:any, age:any){
  //   // let o:any = new Object({name, age}); //直接创建
  //   let o:any = new Object();
  //   o.name = name;
  //   o.gae = age;
  //   return o;
  // }
  // let obj = factory('zs', 23)
  // console.log(obj.name) //zs

  //3.构造函数创建
  // function Person(name:any, age:any){
  //   // @ts-ignore
  //   this.name = name;
  //   // @ts-ignore
  //   this.age = age;
  // }
  // // @ts-ignore
  // let person = new Person('zs', 23)
  // console.log(person.name)

  //4.原型+构造函数的形式
  // function Person(name:any){
  //   //@ts-ignore
  //   this.name = name;
  //   //@ts-ignore
  //   this.friend = [1,2,3]
  // }
  // // Person.prototype.age = 23;  //公共的属性放在外面
  // Person.prototype = {
  //   constructor: Person,
  //   age: 23,  //公共的属性,且不是引用类型的放在外面
  //   getName(){
  //     return this.name;
  //   }
  // };
  // // @ts-ignore
  // let person1 = new Person('zs');
  // // @ts-ignore
  // let person2 = new Person('ls');
  // console.log(person1.getName() + ':' + person1.age + ':' + person1.friend)  //zs:23:1,2,3
  // person1.friend = [4,5,6]  //不会影响person2,因为构造函数创建出来的都是独立的实例
  // console.log(person2.getName() + ':' + person2.age + ':' + person2.friend)  //ls:23:1,2,3

  /**
   * 利用函数继承的几种方式
   */
  //1.原型链继承
  // function Father(){
  //   //@ts-ignore
  //   this.age = 50;
  // }
  // //@ts-ignore
  // Father.prototype.name = 'zs';
  //
  // function Sun(){
  //   //@ts-ignore
  //   this.age = 20
  // }
  // //@ts-ignore
  // Sun.prototype = new Father();
  // //@ts-ignore
  // let sun = new Sun();
  // console.log(sun.name) //'zs'
  // console.log(sun.age)  //20

  //2.构造函数继承
  // function Father(){
  //   // @ts-ignore
  //   this.name = 'zs';
  // }
  // function Sun(){
  //   // @ts-ignore
  //   Father.call(this)
  //   // @ts-ignore
  //   this.age = 20
  // }
  // // @ts-ignore
  // let sun = new Sun();
  // console.log(sun.name); //zs
  // console.log(sun.age);  //20

  // 3.原型链+构造函数的组合继承
  function Father(){
    // @ts-ignore
    this.name = 'zs'
  }
  Father.prototype.age = 50;
  function Sun(){
    // @ts-ignore
    Father.call(this);
  }
  // @ts-ignore
  Sun.prototype = new Father(); //继承父级原型上的东西
  // @ts-ignore
  let sun = new Sun();  //继承构造函数里面的东西
  console.log(sun.name) //zs
  console.log(sun.age) //50


  return (
    <h5>InheritPractice</h5>
  )
}
export default InheritPractice;