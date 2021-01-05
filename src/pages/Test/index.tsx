import React, { useState} from "react";
import { FunctionProfilePage } from './FunctionProfilePage'
import { ClassProfilePage } from './ClassProfilePage'

function Test() {
  const [state,setState] = useState(1);
  return (
    <div className="App">
      <button onClick={() => {
        setState(x => x+x);
      }}>double</button>
      <div>state:{state}</div>
      {/*点击始终显示的是快照值*/}
      <FunctionProfilePage user={state} />
      {/*点击始终显示的是最新值*/}
      <ClassProfilePage user={state} />
    </div>
  );
}
export default Test;