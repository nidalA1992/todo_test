import React, { createContext, useContext, useEffect, useState } from "react";
import { getStorage } from "../utils/getStorage";
import { localStorageContext } from "./localStorageContext";

export interface ITodoDataContext {
  value?: string; 
  completed?: boolean;
  id?: string;
  created?: number;
}

interface IDataContext {
  data: ITodoDataContext[];
  setData: (value: ITodoDataContext[], del?: boolean) => void;
}

interface IDataContextProvider {
  children?: React.ReactNode;
}

export  const dataContext = createContext<IDataContext>({
  data: [],
  setData: () => {}
});

export function DataContextProvider({children}: IDataContextProvider) {
  const [data, setData] = useState<ITodoDataContext[]>(getStorage());
  const { setDataStor } = useContext(localStorageContext);

  useEffect(() => setDataStor(data), [data]);

  const setDataToContext = ([ value ]: ITodoDataContext[], del?: boolean) => {
    setData((prev) => del 
      ? [...prev.filter(without(value))] 
      : [...prev.filter(without(value)), value]
    );
  }

  return (
    <dataContext.Provider value={ {data, setData: setDataToContext} }>
      {children}
    </dataContext.Provider>
  );
}

const without = (value: ITodoDataContext) => (i: ITodoDataContext) => i.id !== value.id;

