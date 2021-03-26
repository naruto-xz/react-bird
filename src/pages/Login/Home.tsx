import React, {useContext} from 'react';
import LoginContext from './contetx';

const HomePage = ()=> {
  const loginContext = useContext(LoginContext);
  return (
    <div>
      <h4>HomePage</h4>
      <div>{loginContext.state.isLoggedIn && '欢迎进入主页'}</div>
    </div>
  )
}
export default HomePage;