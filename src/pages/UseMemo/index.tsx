import React, {useMemo, useState} from "react";

const UseMemo = ()=> {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('zs');
  const handleNumber = ()=> {
    setCount(count + 1)
  }
  const handleName = ()=> {
    setName('zs'+ Math.random())
  }
  const getTotal = ()=> {
    console.log('computed')
    let total = 0;
    for (let i = 0; i< count*10; i++) {
      total += i;
    }
  }
  //只在count发生变化的时候，才会去执行getTotal函数获取新的memoizedValue
  const memoizedValue = useMemo(()=>getTotal(), [count])
  return (
    <div>
      <p>init {count}</p>
      {/*<p>total {getTotal()}</p>*/}
      <p>memoizedTotal {memoizedValue}</p>
      <p>name {name}</p>
      <button onClick={handleNumber}>click count</button>
      <button onClick={handleName}>click name</button>
    </div>
  )
}
export default UseMemo;