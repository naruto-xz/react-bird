import React, {useReducer} from "react";

const countReducer = (state: any, action: any)=> {
  switch (action.type){
    case 'increment':
      return {...state, count: state.count + 1}
      break;
    case 'decrement':
      return {...state, count: state.count - 1}
      break;
    default: return state;
  }
}
const initState = {
  count: 1
}
const ReducerPractise = ()=> {
  const [state, dispatch] = useReducer(countReducer, initState);
  return (
    <div>
      <h4>ReducerPractise</h4>
      <div>{state.count}</div>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    </div>
  )
}
export default ReducerPractise;