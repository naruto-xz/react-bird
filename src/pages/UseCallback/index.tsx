import React, {useState, useCallback} from "react";
import Child from "./Child"
function Parent(){
  const [query,setQuery] = useState('react');
  const [count,setCount] = useState(0);
  const handle = ()=> {
    setCount(count + 1)
  }

  // 无法阻止无关内容变化引起的子组件重新渲染,(fetchData 每次都是最新的)
  // const fetchData = () => {
  //   const url = 'https://hn.algolia.com/api/v1/search?query=' + query
  //   return fetch(url).then(x =>{
  //     return x.text()
  //   })
  // }

  //子组件依赖父组件的函数，当父组件的搜索内容发生变化时，fetchData才会更新，子组件才会重新请求数据
  const fetchData = useCallback(() => {
    const url = 'https://hn.algolia.com/api/v1/search?query=' + query
    return fetch(url).then(x =>{
      return x.text()
    })
  }, [query])

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} value={query} />
      <button onClick={handle}>click {count}</button>
      <Child fetchData={fetchData} query={query}/>
    </div>
  )
}
export default Parent