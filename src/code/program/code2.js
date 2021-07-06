//6.柯里化
/**
 * 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 */
/**
 * add(1, 2, 3) // 6
 * add(1) // 1
 * add(1)(2) // 3
 * add(1, 2)(3) // 6
 * add(1)(2)(3) // 6
 * add(1)(2)(3)(4) // 10
 */

{
   function add(...rest){
     return rest.reduce((pre, cur)=>{
       pre = pre+cur;
       return pre;
     }, 0)
   }
   function curring(fn,firstArg){
     return function (...rest){
       let context = this;
       return fn.apply(context, [firstArg,...rest])
     }
   }
  let add1 = curring(add, 1);
  let add2 = curring(add1, 2);
  let add3 = curring(add2, 3);
  let res = add3();
  console.log(res);

   // let res = add(1,2,3);
   // let res = add(1)(2);
   // console.log(res);
}