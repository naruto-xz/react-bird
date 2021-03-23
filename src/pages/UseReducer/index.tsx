import React, {useReducer} from "react";

const ReducerPractise = ()=> {
  console.log('-----1-1')
  const handle = (state: any, action: any)=> {
    console.log(state,'----0')
    switch (action.type){
      case 'increment':
        // return {...state, count: state.count + 1}
        return {...state, count: state.count + 1}
        break;
      case 'decrement':
        return {...state, count: state.count - 1}
        break;
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(handle, {count: 5});
  console.log(state, '-----1')
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