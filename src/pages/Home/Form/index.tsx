import React from "react"
import {Input} from "antd"
/**
 * 原生写法:受控组件、非受控组件 (对于受控组件写法其实是一样的，非受控组件多了一层包装，要点到input罢了)
 */
class FormPractice extends React.Component<any, any>{
  private currentRef: any;
  constructor(props:any) {
    super(props);
    this.state = {
      name: 'zs',
      age: 23,
      sex: '男'
    }
    this.currentRef = React.createRef();
  }
  changeForm = (e:any)=> {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  submit = ()=> {
    console.log(this.state) //保持不变
    console.log(this.currentRef.current.value)  //直接拿dom节点的数据，无需绑定事件
  }
  render(){
    let {name,age,sex} = this.state;
    return (
      <div>
        <h5>form</h5>
        <input type="text" name={'name'} value={name} onChange={(e) => this.changeForm(e)} />
        <input type="text" name={'age'} value={age} onChange={(e) => this.changeForm(e)} />
        <input type="text" name={'sex'} defaultValue={sex} ref={this.currentRef} />
        <div>antd</div>
        <Input name={'age'} value={age} onChange={this.changeForm} />
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}
export default FormPractice