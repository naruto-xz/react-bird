import React, {useEffect} from "react";
const EventPractice = ()=> {
  //浏览器默认为事件冒泡
  // const handle1 = ()=> {
  //   console.log(1);
  // }
  // const handle2 = ()=> {
  //   console.log(2);
  // }

  //DOM2级下 冒泡与捕获useEffect(()=> {
  //   //   // @ts-ignore
  //   //   let target1:any = document.getElementById('a')
  //   //   target1 && target1.addEventListener('click', ()=> {
  //   //     console.log('a')
  //   //   }, true)  //加了true，则变为捕获方式
  //   //   // @ts-ignore
  //   //   let target2:any = document.getElementById('b')
  //   //   target2 && target2.addEventListener('click', ()=> {
  //   //     console.log('b')
  //   //   })
  //   // }, [])
  //

  return (
    <div>
      <h5>EventPractice</h5>
      {/*<div onClick={handle1}>1*/}
      {/*  <div onClick={handle2}>2</div>*/}
      {/*</div>*/}
      {/*<div id={'a'}>1*/}
      {/*  <div id={'b'}>2</div>*/}
      {/*</div>*/}
    </div>
  )
}
export default EventPractice;