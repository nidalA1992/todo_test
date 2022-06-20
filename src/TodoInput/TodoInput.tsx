import React, { FormEvent, useContext, useState } from 'react';
import styles from './todoinput.css';
import { getValue } from '../utils/pickFromSyntheticEvent';
import { generateRandomKey } from '../utils/generateRandomKey';
import { dataContext } from '../context/dataContext';
import { ControledInput } from '../ControledInput';

interface ITodoInput {
  placeholder?: string;
  buttonText?: string;
  style?: string;
}

export function TodoInput(props: ITodoInput) {
  const [value, setValue] = useState('');
  const { setData } = useContext(dataContext);

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setData([{
      value: value, 
      completed: false, 
      id: generateRandomKey(), 
      created: Date.now(),
    }])
    setValue('')
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input className={styles.input} 
        placeholder='What needs to be done?' 
        type="text" 
        value={value} 
        onChange={getValue(setValue)}/>
      <button className={styles.submit}>+</button>
    </form>
  );
}
