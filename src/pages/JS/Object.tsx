import React from "react";
const ObjectPractice = ()=> {
  /**
   * ES5
   */
  //增、删、改
  // let obj:any = {a:1, b:2};
  // let obj:any = null;
  // obj['c'] = 3;  //{a:1, b:2, c:3};
  // delete obj.a;  //{b:2}
  // obj.b = 4;  //{a:1, b:4}
  // console.log(obj);

  //取所有key、value
  // console.log(Object.keys(obj)); //['a', 'b'];
  // console.log(Object.values(obj)); //[1, 2];

  //克隆
  // let obj1 = JSON.parse(JSON.stringify(obj));
  // obj1.c = 4;
  // console.log(obj)  //{a:1, b:2}
  // console.log(obj1) //{a:1, b:2, c:4}

  //遍历
  // for(let key in obj){
  //   console.log(key);
  // }

  //检测对象
  // console.log(Object.prototype.toString.call(obj)); //[object object]
  // console.log(obj instanceof Object);

  /**
   * ES6
   */
  let obj:any = {a:1, b:2};
  //key值允许表达式写法
  // let obj1 = {
  //   [1+1]: 1
  // }
  // console.log(obj1);  //{2:1}
  //简洁写法
  // let a = 1;
  // let obj2 = {a};
  // console.log(obj2) //{a:1}
  //潜复制
  // let res = Object.assign({}, obj, {c:3});
  // console.log(res); //{a:1, b:2, c:3}
  //传导运算符
  // let obj1:any = {a:{b:2}};
  // let res = obj1?.a?.b
  // console.log(res); //2
  //解构赋值
  // let res = {...obj, c:3}
  // console.log(res)  //{a:1, b:2, c:3}
  // let {a, b}:any = obj;
  // let {a, b}:any = {...obj};
  // console.log(a); //1
  // console.log(b); //2
  // let obj1 = {a:{b:2}}
  // let {a:{b}} = {...obj1};
  // console.log(b); //2

  return (
    <h5>ObjectPractice</h5>
  )
}
export default ObjectPractice;