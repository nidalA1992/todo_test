import React, { useContext, useEffect, useState } from 'react';
import { controlContext } from '../../context/conrolContext';
import { dataContext, ITodoDataContext } from '../../context/dataContext';
import { by } from '../../utils/by';
// import { ITodoStorage } from '../../context/todosStoreContext';
import { TodoItem } from './TodoItem';
import styles from './todolist.css';

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

  useEffect(() => {
    setTodoItems(data);
  }, [data]);

  const list = todoItems
    .map((i) => 
      i.value && 
      <TodoItem 
        value={i.value} 
        key={i.id} 
        id={i.id || i.value} 
        completed={i.completed}/> 
    );
  
  return (
    <ul className={styles.todoList}>
      {list}
    </ul>
  );
}
