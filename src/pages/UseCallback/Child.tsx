import React, {useState, useEffect} from "react"
function Child(props: any){
  console.log('rerender:')
  const [result,setResult] = useState('')
  const { fetchData } = props;
  useEffect(() => {
    fetchData().then((result: any) => {
      console.log(123)
      setResult(result);
    })
  },[fetchData])
  return (
    <div>
      <div>query:{props.query}</div>
      <div>result:{result}</div>
    </div>
  )
}
export default Child;