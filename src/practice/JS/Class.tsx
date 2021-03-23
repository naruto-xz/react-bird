import React from "react";

class ModuleA {
  constructor(x:any, y:any) {
    // @ts-ignore
    this.x = x;
    // @ts-ignore
    this.y = y;
  }
  static a = 1;
  b = 2;
  static eat(){
    console.log(this.a)
    // console.log(this.b)  //错误，静态方法只能调用静态属性
  }
  sleep(){
    //console.log(this.a) //错误，非静态方法只能调用非静态属性
    console.log(this.b)
  }
}

class ModuleB extends ModuleA{
  constructor() {
    // @ts-ignore
    super();
  }
}

const ClassPractice = ()=> {
  //类的静态属性和方法可以被直接类调用
  console.log(ModuleA.a)  //1
  console.log(ModuleA.eat())  //1
  //事实上，类所有的方法都定义在类的prototype属性上,在类的实例上调用方法，其实就是调用原型上的方法。
  console.log(ModuleA.prototype);

  //通过创建类的实例，来调用实例上的属性和方法
  let ca = new ModuleA(6,7);
  console.log(ca.b);  //2
  console.log(ca.sleep());  //2

  //类可以通过extends继承，继承里面的静态属性和方法
  console.log(ModuleB.a)  //1
  console.log(ModuleB.eat())  //1

  //创建实例后，通过super继承里面的实例的属性和方法,constructor是默认的
  let cb = new ModuleB();
  console.log(cb.b) //2
  console.log(cb.sleep()) //2

  return (
    <h5>ClassPractice</h5>
  )
}

export default ClassPractice;