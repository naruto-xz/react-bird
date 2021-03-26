import React, {useContext} from "react";
import {AppContext} from "./context/app"

const HomePage = ()=> {
  const appContext = useContext(AppContext);
  const {appData} = appContext;
  return (
    <div>
      <h4>HomePage</h4>
      <div>{appData.name}</div>
      <div>{appData.age}</div>
    </div>
  )
}
export default HomePage;