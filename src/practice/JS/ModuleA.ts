// export default {
//   x:1,
//   add(){
//     console.log(123);
//   }
// }

// @ts-ignore
let x = 1;
// @ts-ignore
function add(){
  console.log(123);
}

//在node环境下，module.exports相当于export default，然后在一个{}上挂属性和方法，用的是node的CommonJS的规范
module.exports.x = x;
module.exports.add = add

//exports = module.exports
// exports.x = x;
// exports.add = add;
