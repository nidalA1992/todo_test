import React, { useContext, useEffect, useState } from 'react';
import { by } from '../../utils/by';
import { TodoItem } from './TodoItem';
import styles from './todolist.css';
import { controlContext } from '../../context/conrolContext';
import { dataContext, ITodoDataContext } from '../../context/dataContext';

interface ITodoList {
  todos: ITodoDataContext[];
}

export function TodoList({todos}: ITodoList) {
  const [todoItems, setTodoItems] = useState<ITodoDataContext[]>([]); 
  const { data } = useContext(dataContext);
  const { filter } = useContext(controlContext);
  
  useEffect(() => {
    setTodoItems(data.filter(by(filter)));
  }, [filter, data])

  return (
    <ul className={styles.todoList}>
      { todoItems.map((props) => <TodoItem {...props} key={props.id}/> ) }
    </ul>
  );
}
