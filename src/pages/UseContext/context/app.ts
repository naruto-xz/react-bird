import {createContext} from "react";

interface AppTypes{
  appData:{
    name: string,
    age: number
  },
  setAppData: any;
}
const initState = {
  appData:{
    name: '',
    age: 0
  },
  setAppData(){}
}
const AppContext = createContext<AppTypes>(initState);

export {AppContext};