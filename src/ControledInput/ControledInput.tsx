import React, { useState } from 'react';
import { getValue } from '../utils/pickFromSyntheticEvent';
import styles from './controledinput.css';

interface IControledInput {
  value?: string;
  placeholder?: string;
  className?: string;
}

export function ControledInput(props: IControledInput) {
  const [value, setValue] = useState(props.value);
  
  return (
    <input 
    type="text" 
    className={props.className}
    value={value || ''} 
    placeholder={props.placeholder || ''} 
    onChange={getValue(setValue)}/>
  );
}
