import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { controlContext, TFilter } from '../../context/conrolContext';
import { dataContext, ITodoDataContext } from '../../context/dataContext';
import styles from './todocontrol.css';

export function TodoControl() {
  const [activeNum, setActiveNum] = useState(0)

  const {setFilter, filter}  = useContext(controlContext);
  const { data, setData } = useContext(dataContext);

  useEffect(() => {setActiveNum(countActive(data))}, [data]);

  useEffect(() => swithcButtonBy(filter), [filter]);

  const handleClickFilter = (e:SyntheticEvent<HTMLDivElement>) => {
    swithcButtonBy(e.target)
    const el = e.target as HTMLDivElement;
    e.target && setFilter(el.dataset.filter as TFilter)    ;
  }

  const handleClickDeletCompleted = () => 
    data.forEach((i) => i.completed && setData([i], true));

  return (
    <div className={styles.control}> 
      <span id='todoCounter'>{activeNum} items left</span>
      <div onClick={handleClickFilter} className={styles.filter}>
        <button data-filter='all' className={styles.button}>
          All
        </button>
        <button data-filter='active' className={styles.button}>
          Active
        </button>
        <button data-filter='completed' className={styles.button}>
          Completed
        </button>
      </div>
      <button onClick={handleClickDeletCompleted  }>Clear completed</button>  
    </div>
  );
}

const countActive = (data: ITodoDataContext[]) => 
  data.reduce((sum, i) => !i.completed 
    ? sum+=1 
    : sum+=0, 0);


const addAndRemoveClasses = (cond: boolean, elem: HTMLButtonElement) => 
  cond 
  ? elem.classList.remove(styles.active) 
  : elem.classList.add(styles.active);


const swithcButtonBy = (data: string | EventTarget) => 
  document.querySelectorAll('button')
    .forEach((i) => typeof data === 'string' 
      ? addAndRemoveClasses(i.dataset.filter !== data, i) 
      : addAndRemoveClasses(i !== data, i));
