import React, {useState} from 'react';
// import ReactDOM from "react-dom";
// import App from "@/App";

// let state: any;
// const render = ()=> {
//   ReactDOM.render(<App />,
//     document.getElementById('root'));
// }
// const MyUseState = (initialValue: any)=> {  //自己写一个最简单的useState
//   state = state === undefined ? initialValue : state;
//   const setState = (value: any)=> {
//     state = value;
//     render();
//   }
//   return [state, setState];
// }

const UseState = ()=> {
  const [count, setCount] = useState(0);
  // const [count, setCount] = MyUseState(0);

  const handle = ()=> {
    setCount(count + 1);
    // console.log(count, '---0') // 0 是异步的
  }
  const handle1 = ()=> {
    setCount((count: any)=> count + 1);
    setCount((count: any)=> count + 1);  //count为1 拿到最新的count值
  }
  const handle2 = ()=> {
    setTimeout(()=> { //将会创建一个初始值的闭包，闭包中的初始状态值state为0
      setCount(count + 1);
      console.log(count, '---2')  //0 每次都是0, 因为闭包中的初始状态值state为0，而每次点击时其实是取了相同的初始值，所以每次都是0
    }, 3000)
  }
  console.log(count, '---1')  //1, 这里已经是重新render后的值了
  return (
    <div>
      <h4>useState</h4>
      <button onClick={handle}>handle</button>
      <button onClick={handle1}>handle1</button>
      <button onClick={handle2}>handle2</button>
      <div>{count}</div>
    </div>
  )
}
export default UseState;