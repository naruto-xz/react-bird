import React, {useContext} from "react";
import {AppContext} from "./context/app"

const HomePage = ()=> {
  const appContext = useContext(AppContext);
  return (
    <div>
      <h4>HomePage</h4>
      <div>{appContext.name}</div>
      <div>{appContext.age}</div>
    </div>
  )
}
export default HomePage;