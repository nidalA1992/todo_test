import React, { createContext, useEffect, useState } from 'react';
import { setStorage } from '../utils/setStorage';

interface ILocalStorageContextProvider {
  children?: React.ReactNode;
}

export interface ITodoStorage {
  value?: string; 
  completed?: boolean;
  id?: string;
}

export interface ILocalStorageContext {
  data: ITodoStorage[],
  setDataStor: (value: ITodoStorage[]) => void;
}

export const localStorageContext = createContext<ILocalStorageContext>({
  data: [{}],
  setDataStor: () => {}
});

export function LocalStorageContextProvider({ children }: ILocalStorageContextProvider) {
  const [data, setDataStor] = useState<ITodoStorage[]>([]);

  useEffect(() => setStorage(data), [data]);
  
  return (
    <localStorageContext.Provider value={{data, setDataStor}}>
      {children}
    </localStorageContext.Provider>    
  );
}
