import React, {useState, useCallback} from "react";
import Child from "./Child"
function Parent(){
  const [query,setQuery] = useState('react');
  const [count,setCount] = useState(0);
  const handle = ()=> {
    setCount(count + 1)
  }

  // const fetchData = () => {
  //   const url = 'https://hn.algolia.com/api/v1/search?query=' + query
  //   return fetch(url).then(x =>{
  //     return x.text()
  //   })
  // }

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