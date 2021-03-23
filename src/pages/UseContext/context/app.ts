import {createContext} from "react";

interface AppTypes{
  name: string,
  age: number
}

const AppContext = createContext<AppTypes>({
  name: '',
  age: 0,
});

const AppSetContext = createContext<any>(undefined);

export {AppContext, AppSetContext};