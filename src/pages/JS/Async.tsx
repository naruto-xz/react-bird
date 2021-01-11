import React from "react";
const AsyncPractice = () => {

  //await必须在async函数中才能使用,看起来更像为我们习惯的同步操作,总是返回一个promise对象
  async function fn(x:any) {
    let res:any = await new Promise((resolve, reject) => {
      if(x > 1){
        setTimeout(()=> {
          resolve(x);
        }, 5000)
      }else {
        setTimeout(()=> {
          reject(x);
        }, 5000)
      }
    });
    //错误的话这里都不会再执行
    console.log('5秒后输出结果:' + res); //5秒后输出结果:2
    return res+1;
  }
  fn(1).then(res => {
    console.log(res); //3
  }).catch(err => {
    console.log(err)  //1
  });

  //箭头函数，async要跟在()前面
  const fn1 = async ()=> {

  }

  return (
    <h5>AsyncPractice</h5>
  )
}
export default AsyncPractice;