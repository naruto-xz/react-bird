import React, {useState} from "react";
import {AppContext, AppSetContext} from "./context/app";
import HomePage from "./HomePage";
import MarkingPage from "./MarkingPage";

const ContextPractise = ()=> {
  const [appData, setAppData] = useState({
    name: 'zs',
    age: 23
  });
  return (
    <AppContext.Provider value={appData}>
      <AppSetContext.Provider value={setAppData}>
        <div>
          <h4>ContextPractise</h4>
          <HomePage />
          <MarkingPage />
        </div>
      </AppSetContext.Provider>
    </AppContext.Provider>
  )
}
export default ContextPractise;