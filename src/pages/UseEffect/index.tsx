import React, {useState, useEffect, useCallback} from "react";

const UseEffect = (props: any)=> {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeCount = ()=> {
    setCount(count + 1);
  }

  //只执行一次
  // useEffect(()=> {
  //   setTotal(count);
  // }, []);

  //监听变化
  useEffect(()=> {
    setTotal(count);
  }, [count]);

  //每次清除副作用
  useEffect(()=> {
    let time = setTimeout(()=> {
      console.log(count);
    }, 1000);
    return ()=> {
      clearTimeout(time);
    }
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>total is {total}</p>
      <button onClick={changeCount}>
        Click count
      </button>
    </div>
  )
}
export default UseEffect;