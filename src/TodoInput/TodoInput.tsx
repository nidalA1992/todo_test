import React, { FormEvent, useContext, useState } from 'react';
import styles from './todoinput.css';
import { getValue } from '../utils/pickFromSyntheticEvent';
import { generateRandomKey } from '../utils/generateRandomKey';
import { dataContext } from '../context/dataContext';
import { controlContext } from '../context/conrolContext';

export function TodoInput() {
  const [value, setValue] = useState('');
  const { setData } = useContext(dataContext);
  const { setFilter } = useContext(controlContext);

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setData(
    [{
      value: value, 
      completed: false, 
      id: generateRandomKey(), 
    }])
    setFilter('all');
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
