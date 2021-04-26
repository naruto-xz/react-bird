//闭包
{
  function fn(){
    let count = 0;
    return function sum(){
      return count += 1;
    }
  }
  let sum = fn();
  console.log(sum()); //1
  console.log(sum()); //2
}
//递归
{
 function sum(n){
   if (n === 1) {
     return 1;
   }
   return n+sum(n-1);
 }
  let res = sum(100);
  console.log(res);
}

//正则
{
  let str = '  a bc ';
  // let reg = /\s/g;  //去除所以空格
  let reg = /(^\s*)|(\s*$)/g; //去除前后空格
  // let reg = /\s{2}/g; //去除空格为2的
  function trim(){
    let newStr = str.replace(reg, '');
    console.log(newStr);
    console.log(newStr.length);
  }
  trim();
}

//异步加载js
// {
//   let script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = './test1.js';
//   document.body.appendChild(script);
//   script.onload = function (){
//     console.log('callback');
//   }
// }

//实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
//考察typeof返回哪些数据类型？
{
  let data = {age: 23};
  function clone(data){
    let copy;
    switch (typeof data){
      case "undefined": break;
      case "string": copy = data + ""; break;
      case "number": copy = data - 0; break;
      case "boolean": copy = data; break;
      case "object":
        if (Array.isArray(data)) {
          copy = [];
          for (let i = 0; i<data.length; i++) {
            copy.push(clone(data[i]));  //要递归调研一下啊clone函数，避免深度引用
          }
        } else {
          copy = {};
          for (let key in data) {
            copy[key] = clone(data[key]);
          }
        }; break;
      default: copy = data;
    }
    return copy;
  }
  let res = clone(data);
  console.log(res);
}

//构造函数
{
  function Person(name, age){
    this.name = name;
    this.age = age;
  }
  let person = new Person('zs', 24);
  console.log(person.name);
  console.log(person.age);
  console.log('----------------');
}

//继承
//原型链继承
{
  function Father(){
  }
  Father.prototype.age = 24;
  Father.prototype.eat = function (){
    console.log('eat');
  };
  function Sun(){}
  Sun.prototype = Father.prototype;
  let sun = new Sun();
  console.log(sun.age);
  console.log(sun.eat());
  console.log('原型继承-----------');
}
//构造函数继承
{
  function Father(){
    this.age = 24;
    this.eat = function (){
      console.log('eat');
    }
  }
  function Sun(){
    Father.apply(this);
  }
  let sun = new Sun();
  console.log(sun.age);
  console.log(sun.eat());
  console.log('构造函数继承-----------');
}
//原型链+构造函数的继承
{
  function Father(){
    this.age = 23;
  }
  Father.prototype.eat = function (){
    console.log('eat');
  }
  function Sun(){
    Father.apply(this);
  }
  Sun.prototype = Father.prototype;
  let sun = new Sun();
  console.log(sun.age);
  console.log(sun.eat());
  console.log('原型链+构造函数的继承-----------');
}

//类
{
  class Person{
    static sex = 'man';
    constructor(age) {
      this.age = age;
    }
    eat(){
      console.log('eat');
    }
  }
  let person = new Person(25);
  console.log(person); //{age:25}
  console.log(person.age);  //25
  console.log(person.eat());  //eat
  console.log(Person.sex);  //man

  //属性在对象实例上
  console.log(person.hasOwnProperty("age"));  //true

  //方法在类的原型上
  console.log(person.hasOwnProperty("eat"));  //false
  console.log(Person.prototype.hasOwnProperty("eat")); //true

  //静态属性在类上
  console.log(Person.hasOwnProperty("sex"));  //true
}

//类的继承(利用静态变量与函数直接继承)
{
  class Father {
    static age = 26;
    static eat = function (){
      console.log('eat');
    }
  }
  class Sun extends Father {

  }
  console.log(Sun.age); //26
  console.log(Sun.eat()); //eat
}

//类的继承(利用super赋予函数作用域来继承)
{
  class Father{
    constructor(age) {
      this.age = age;
    }
    eat(){
      console.log('eat');
    }
  }
  class Sun extends Father{
    constructor() {
      super(27);
    }
  }
  let sun = new Sun();
  console.log(sun.age);
  console.log(sun.eat());
}




