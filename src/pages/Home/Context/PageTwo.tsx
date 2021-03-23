import React from "react"
import PropTypes from "prop-types";
import PageThree from "./PageThree"

class PageTwo extends React.Component<any, any>{
  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeContext: PropTypes.func
  }
  deleteAge = (age:any)=> {
    let {changeContext} = this.context;
    changeContext(age-1)
  }
  render(){
    let { name, age } = this.context;
    return (
      <div>
        <h5>pageTwo</h5>
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={()=>this.deleteAge(age)}>deleteAge</button>
        <PageThree />
      </div>
    )
  }
}
export default PageTwo;