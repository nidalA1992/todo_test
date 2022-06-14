import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export type TFilter = 'all' | 'active' | 'completed';

interface IControlContext {
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
}

interface IControlContextProvider {
  children?: React.ReactNode;
}

export const controlContext = createContext<IControlContext>({
  filter : 'all', 
  setFilter: () => {}
});

export function   ControlContextProvider({children}: IControlContextProvider) {
  const [filter, setFilter] = useState<TFilter>('all');

  return (
    <controlContext.Provider value={{filter: filter, setFilter: setFilter}}> 
      {children}
    </controlContext.Provider>
  )
}

