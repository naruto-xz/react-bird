import React from 'react';

/**
 * react hook练习
 */
import ContextPractise from '@/pages/UseContext';
// import ReducerPractise from '@/pages/UseReducer';
// import LoginPractise from '@/pages/Login';

// import Test from '@/pages/Test'
import UseState from "@/pages/UseState";
import UseEffect from "@/pages/UseEffect";
import UseCallback from '@/pages/UseCallback'
// import UseMemo from '@/pages/UseMemo'
// import UseRef from "@/pages/UseRef"
/**
 * react class练习
 */
import HomeModule from "@/pages/Home/index"
/**
 * react redux练习
 */
// import ReduxModule from '@/pages/ReduxModule/index'
import ReactReduxModule from '@/pages/ReactReduxModule/index'
//纯redux
// import "@/pages/Store";
//借助react-redux
import {Provider} from 'react-redux';
import store from "@/pages/Store";
/**
 * JS练习
 */
// import StringPractice from "@/practice/JS/String"
// import NumberPractice from "@/practice/JS/Number"
// import ArrPractice from "@/practice/JS/Arr"
// import ObjectPractice from "@/practice/JS/Object"
// import WindowPractice from "@/practice/JS/Window"
// import SymbolPractice from "@/practice/JS/Symbol"
// import DatePractice from "@/practice/JS/Date"
// import RegExpPractice from "@/practice/JS/RegExp"
// import EventPractice from "@/practice/JS/Event"
// import SetPractice from "@/practice/JS/Set"
// import MapPractice from "@/practice/JS/Map"
// import FunctionPractice from "@/practice/JS/Function"
// import PromisePractice from "@/practice/JS/Promise"
// import AsyncPractice from "@/practice/JS/Async";
// import PrototypePractice from "@/practice/JS/Prototype";
// import InheritPractice from "@/practice/JS/Inherit";
// import ClassPractice from "@/practice/JS/Class";
// import ModulePractice from "@/practice/JS/Module";

function App() {
  return (
    <div className="App">
      {/*react hook练习*/}

      <ContextPractise></ContextPractise>
      {/*<ReducerPractise></ReducerPractise>*/}
      {/*<LoginPractise />*/}

      {/*<Test></Test>*/}
      {/*<UseState></UseState>*/}
      {/*<UseEffect></UseEffect>*/}
      {/*<UseCallback></UseCallback>*/}
      {/*<UseMemo></UseMemo>*/}
      {/*<UseRef></UseRef>*/}

      {/*<Tag>test</Tag>*/}

      {/*react class练习*/}
      {/*<HomeModule></HomeModule>*/}

      {/*react redux练习*/}
      {/*纯redux*/}
      {/*<ReduxModule></ReduxModule>*/}
      {/*借助react-redux*/}
      {/*<Provider store={store}>*/}
      {/*  <ReactReduxModule></ReactReduxModule>*/}
      {/*</Provider>*/}


      {/*JS练习*/}
      {/*<StringPractice />*/}
      {/*<NumberPractice />*/}
      {/*<ArrPractice />*/}
      {/*<ObjectPractice />*/}
      {/*<WindowPractice />*/}
      {/*<SymbolPractice />*/}
      {/*<DatePractice />*/}
      {/*<SetPractice />*/}
      {/*<MapPractice />*/}
      {/*<FunctionPractice />*/}
      {/*<PromisePractice />*/}
      {/*<AsyncPractice />*/}
      {/*<PrototypePractice />*/}
      {/*<InheritPractice />*/}
      {/*<ClassPractice />*/}
      {/*<ModulePractice />*/}
    </div>
  );
}

export default App;
