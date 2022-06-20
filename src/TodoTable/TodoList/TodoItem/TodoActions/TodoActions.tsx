import { type } from 'cypress/types/jquery';
import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../../../context/dataContext';
import { TodoInput } from '../../../../TodoInput';
import { getChecked } from '../../../../utils/pickFromSyntheticEvent';
import { ITodoItem } from '../TodoItem';
import styles from './todoactions.css';

export function TodoActions(props: Partial<ITodoItem>) {
  const { completed = false} = props;
  const [complete, setComplete] = useState(completed);
  const [deleted, setDeleted] = useState(false);
  const { setData } = useContext(dataContext);

  useEffect(() => setData([props], deleted), [deleted])
  useEffect(() => setData([ {...props, completed: complete} ]), [complete])

  const handleDelete = () => setDeleted((prev:boolean) => !prev);
  // const handleEdit = () => setTextType((prev:boolean) => !prev);
  
  return (
    <>
      <input className={styles.checkbox}  checked={complete} type="checkbox" onChange={getChecked(setComplete)} />
      <button className={styles.editButton}> 
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox='0 0 50 50'><path d="M9 39H11.2L33.35 16.85L31.15 14.65L9 36.8ZM39.7 14.7 33.3 8.3 35.4 6.2Q36.25 5.35 37.5 5.35Q38.75 5.35 39.6 6.2L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6ZM37.6 16.8 12.4 42H6V35.6L31.2 10.4ZM32.25 15.75 31.15 14.65 33.35 16.85Z"/></svg>
      </button>
      <button className={styles.delButton} onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox='0 0 50 50'><path d="M13.05 42Q11.85 42 10.95 41.1Q10.05 40.2 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39Q37.95 40.2 37.05 41.1Q36.15 42 34.95 42ZM34.95 10.5H13.05V39Q13.05 39 13.05 39Q13.05 39 13.05 39H34.95Q34.95 39 34.95 39Q34.95 39 34.95 39ZM18.35 34.7H21.35V14.75H18.35ZM26.65 34.7H29.65V14.75H26.65ZM13.05 10.5V39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Z" fill='#999'/></svg>
      </button>
    </>
  );
}

