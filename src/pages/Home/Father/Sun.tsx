import React from "react"
import {Modal} from "antd"

class SunPractice extends React.Component<any, any>{
  constructor(props:any) {
    super(props);
    this.state = {
      show: false
    }
  }
  // componentWillMount() {
  //   this.props.onChildRef(this)
  // }
  open = ()=> {
    this.setState({
      show: true
    })
  }
  close = ()=> {
    this.setState({
      show: false
    })
  }
  render(){
    let {show} = this.state;
    return (
      <Modal title={'sun'} visible={show} onCancel={this.close}>
        <div>儿子</div>
      </Modal>
    )
  }
}
export default SunPractice;