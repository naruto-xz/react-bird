import React from "react"
import PropTypes from "prop-types"

class PageThree extends React.Component<any, any>{
  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeContext: PropTypes.func
  }
  addAge = (age:any)=> {
    let {changeContext} = this.context;
    changeContext(age+1)
  }
  render(){
    let { name, age } = this.context;
    return (
      <div>
        <h5>pageThree</h5>
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={()=>this.addAge(age)}>addAge</button>
      </div>
    )
  }
}
export default PageThree;