import React from "react";
import {connect} from "react-redux"
import action from '@/pages/Store/action'
class ReduxReactModule extends React.Component<any, any>{
  render(){
    console.log(this.props)
    return (
      <div>
        <h4>ReduxReactModule</h4>
        <div>num: {this.props.n}</div>
        {/*<button onClick={() => this.props.dispatch(action.age.add())}>add</button>*/}
        {/*<button onClick={() => this.props.dispatch(action.age.add())}>add</button>*/}
        <button onClick={this.props.add}>add</button>
        <button onClick={this.props.delete}>delete</button>
      </div>
    )
  }
}
let mapStateToProps = function (state: any){  //全部state状态
  return state.age; //age {n: 1}
}
//可以自己写
// let mapDispatchToProps = function (dispatch: any) { //dispatch方法
//   return {
//     add: () => dispatch(action.age.add()),
//     delete: () => dispatch(action.age.delete()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxReactModule);
export default connect(mapStateToProps, action.age)(ReduxReactModule);