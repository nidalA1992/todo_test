import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { TodoActions } from './TodoActions';
import styles from './todoitem.css';

export interface ITodoItem {
  value: string;
  completed: boolean;
  id: string;
  created: number;
}

export function TodoItem(props: Partial<ITodoItem>) {
  
  return (
    <li className={styles.todoItem}>
      <label className={styles.label}>
        <TodoActions {...props} />
        <span className={styles.text}>{props.value}</span>
        <span className={styles.created}>{formatDate(props.created || 0)}</span>
      </label>
    </li>
  );
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
