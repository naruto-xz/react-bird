import React, {useReducer} from "react";
import LoginContext from './contetx';
import loginService from './service';
import LoginButton from "./LoginButton";
import HomePage from "./Home";

function loginReducer(state: any, action: any) {
  switch (action.type) {
    case 'login':
      return {...state, isLoading: true}; break;
    case 'success':
      console.log('success');
      return {...state, isLoading: false, isLoggedIn: true}; break;
    case 'fail':
      return {...state, isLoading: false, error: action.payload.error}; break;
  }
}
const initState = {
  name: '',
  pwd: '',
  isLoading: false,
  isLoggedIn: false,
  error: '',
}
const LoginPractise = ()=> {
  const [state, dispatch] = useReducer(loginReducer, initState);
  if (state.isLoading) {
    loginService.login().then(res=> {
      if (res) {
        dispatch({type: 'success'})
      }
    }).catch(error => {
      dispatch({
        type: 'fail',
        payload: { error: error.message }
      })
    })
  }
  return (
    <LoginContext.Provider value={{state, dispatch}}>
      <h4>LoginPractise</h4>
      <LoginButton />
      <HomePage />
    </LoginContext.Provider>
  )
}
export default LoginPractise;