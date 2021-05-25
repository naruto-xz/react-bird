import React from "react";
import BasePractice from "./Base";
// import FormPractice from "./Form"
// import FatherPractice from "./Father"
import ContextPractice from "./Context";

class Home extends React.Component<any, any>{
  constructor(props:any) {
    super(props);
    this.state = {
      person:{
        name: 'zs',
        age: 23
      },
      other: {
        sex: '男'
      }
    }
  }
  addAge = (age:any)=> {
    let {person} = this.state;
    person.age = person.age + age;
    this.setState({
      ...this.state,
      person: person
    })
  }

  render(){
    let {person,other} = this.state
    return (
      <div>
        <h4>Home</h4>
        <BasePractice person={person} other={other} onChange={this.addAge} />
        {/*<FormPractice />*/}
        {/*<FatherPractice />*/}
        <ContextPractice />
      </div>
    )
  }
}
export default Home;