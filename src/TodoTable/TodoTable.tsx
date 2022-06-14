import React  from 'react';
import { TodoControl } from './TodoControl';
import { TodoList } from './TodoList';
import styles from './todotable.css';

export function TodoTable() {
  return (
    <div className={styles.table}>
      <TodoList todos={[]} />
      <TodoControl />
    </div>
  );
}

