import React, {useContext} from "react";
import {AppContext} from './context/app';

const MarkingPage = ()=> {
  const appContext = useContext(AppContext);
  const {setAppData} = appContext;
  const handle = ()=> {
    setAppData((state: any) => ({...state, age: state.age+1}))
  }
  return (
    <div>
      <h4>MarkingPage</h4>
      <button onClick={handle}>changeContext</button>
    </div>
  )
}
export default MarkingPage;