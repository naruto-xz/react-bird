import React, {useState, useEffect} from "react"
function Child(props: any){
  console.log('re-render:')
  const [result,setResult] = useState<any>({})
  const { fetchData } = props;
  useEffect(() => {
    fetchData().then((result: any) => {
      console.log(123)
      setResult(JSON.parse(result));
    })
  },[fetchData])
  return (
    <div>
      <div>result:{result.query}</div>
    </div>
  )
}
export default Child;