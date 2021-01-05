import React, {useState, useEffect, useCallback} from "react";

const UseEffect = (props: any)=> {
  // console.log(props, '---props');
  const [count, setCount] = useState(0);
  // const doSome = useCallback(()=> {
  //   console.log(name, count, '---1111')
  // }, [count])

  // useEffect(() => {
  //   doSome()
  //   // console.log(count, '----111')
  //   // document.title = `You clicked ${count} times`;
  // }, [params]);

  // useEffect(()=> {
  //   let id = setInterval(()=> {
  //     console.log(count, '----222')
  //     // setCount(count + 1)
  //     setCount(c => c+ 1)
  //   }, 6000)
  //   return ()=> {
  //     console.log(id, '----333')
  //     clearInterval(id)
  //   }
  // }, [])

  console.log(count, '----111')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click count
      </button>
    </div>
  )
}
export default UseEffect;