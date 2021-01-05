import React, {useState,useRef} from 'react';

// const UseRef = function (){
//   const inputEl:any = useRef(null);
//   const handle = ()=> {
//     inputEl.current.focus();
//   }
//   return (
//     <div>
//       <input type="text" ref={inputEl}/>
//       <button onClick={handle}>聚焦</button>
//     </div>
//   )
// }

const UseRef = function (){
  const [count, setCount] = useState(0);
  const lastCount = useRef(count);
  const handle = ()=> {
    setCount(count + 1);
    lastCount.current = count + 1;  //对current的实际操作才会诱发变化
    setTimeout(()=> {
      console.log(lastCount.current);
    }, 3000)
  }

  return (
    <div>
      <div>{lastCount.current}</div>
      <button onClick={handle}>改变</button>
    </div>
  )
}
export default UseRef;
