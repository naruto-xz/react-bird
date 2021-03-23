import React, {useContext} from "react";
import {AppSetContext} from './context/app';

const MarkingPage = ()=> {
  const appSetContext = useContext(AppSetContext);
  const handle = ()=> {
    appSetContext((state: any) => ({...state, age: state.age+1}))
  }
  return (
    <div>
      <h4>MarkingPage</h4>
      <button onClick={handle}>changeContext</button>
    </div>
  )
}
export default MarkingPage;