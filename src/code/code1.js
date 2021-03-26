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

}








