import React, {useContext} from "react";
import LoginContext from './contetx';

const LoginButton = ()=> {
  const loginContext = useContext(LoginContext);
  const login = ()=> {
    loginContext.dispatch({type: 'login'});
  }
  return (
    <div>
      <button onClick={login}>LoginButton</button>
    </div>
  )
}
export default LoginButton;