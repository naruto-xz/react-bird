import React from "react"
import PropTypes from "prop-types"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"

class ContextPractice extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'zs',
      age: 23
    }
  }
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeContext: PropTypes.func
  }
  getChildContext(){
    let {name, age} = this.state;
    let {changeContext} = this;
    return {
      name,
      age,
      changeContext
    }
  }
  changeContext = (age:any)=> {
    this.setState({
      age: age
    })
  }
  render(){
    return (
      <div>
        <h5>context</h5>
        <PageOne />
        <PageTwo />
      </div>
    )
  }
}
export default ContextPractice;