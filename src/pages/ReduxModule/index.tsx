import React from "react";
import action from '@/pages/Store/action'
class ReduxModule extends React.Component<any, any>{
  componentDidMount() {
    window.store.subscribe(()=>{
      this.forceUpdate();
    })
  }
  render(){
    console.log((window as any).store)
    return (
      <div>
        <h4>reduxModule</h4>
        <div>num: {window.store.getState().age.n}</div>
        <button onClick={() => window.store.dispatch(action.age.add())}>add</button>
        <button onClick={() => window.store.dispatch(action.age.delete())}>delete</button>
      </div>
    )
  }
}
export default ReduxModule;