import React, {useState} from "react";
import {AppContext} from "./context/app";
import HomePage from "./HomePage";
import MarkingPage from "./MarkingPage";

const ContextPractise = ()=> {
  const [appData, setAppData] = useState({
    name: 'zs',
    age: 23
  });
  return (
    <AppContext.Provider value={{appData, setAppData}}>
      <div>
        <h4>ContextPractise</h4>
        <HomePage />
        <MarkingPage />
      </div>
    </AppContext.Provider>
  )
}
export default ContextPractise;