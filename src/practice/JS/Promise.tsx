import React from "react";
const PromisePractice = ()=> {

  // new Promise((resolve,reject) => {
  //   console.log('1.立刻执行') //1.立刻执行
  //   setTimeout(()=> {
  //     resolve('2.延迟成功执行');
  //   },3000);
  //   setTimeout(()=> {
  //     reject('3.延迟失败执行')  //不会被执行，因为状态不可逆
  //   },5000)
  // }).then(res => {
  //   console.log(res); //2.延迟成功执行
  // }).catch(err => {
  //   console.log(err);
  // }).finally(()=> {
  //   console.log('4.执行完毕')
  // })

  // function a(){
  //   return 1;
  // }
  // function b(){
  //   return 2;
  // }
  // Promise.all([
  //   a(),
  //   b()
  // ]).then(res=>{
  //   console.log(res); //[1,2]
  // })

  return (
    <h5>PromisePractice</h5>
  )
}
export default PromisePractice;