import React from "react";

type Callback<T> = (t: T) => void;

export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => 
    <E extends Callback<T[K]>>(fn: E) => 
      (e: React.SyntheticEvent<T>) => 
        fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');
