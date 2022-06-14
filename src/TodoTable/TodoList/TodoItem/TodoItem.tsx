import React, { SyntheticEvent, useContext, useState } from 'react';
import { controlContext } from '../../../context/conrolContext';
import { dataContext } from '../../../context/dataContext';
import { getChecked } from '../../../utils/pickFromSyntheticEvent';
import styles from './todoitem.css';

interface ITodoItem {
  value: string;
  completed?: boolean;
  id: string;
}

export function TodoItem(props: ITodoItem) {
  const { 
    value, 
    completed = false,
  } = props;

  const [complete, setComplete] = useState(completed);
  const [deleted, setDeleted] = useState(false);

  const { setData } = useContext(dataContext);
  const { setFilter } = useContext(controlContext);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    getChecked(setComplete)(e);
    setData([ {...props, completed: !completed} ]);
    setFilter('all');
  }

  const handleClick = () => {
    setDeleted(!deleted); 
    setData([props], true);
  };

  return (
    <li className={styles.todoItem}>
      {!deleted && 
        <label className={styles.label}>
          <input className={styles.checkbox}  checked={complete} type="checkbox" onChange={handleChange} />
          <span className={styles.text}>{value}</span>
          <button className={styles.delButton} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox='0 0 50 50'><path d="M13.05 42Q11.85 42 10.95 41.1Q10.05 40.2 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39Q37.95 40.2 37.05 41.1Q36.15 42 34.95 42ZM34.95 10.5H13.05V39Q13.05 39 13.05 39Q13.05 39 13.05 39H34.95Q34.95 39 34.95 39Q34.95 39 34.95 39ZM18.35 34.7H21.35V14.75H18.35ZM26.65 34.7H29.65V14.75H26.65ZM13.05 10.5V39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Z" fill='#999'/></svg>
          </button>
        </label>}
    </li>
  );
}
