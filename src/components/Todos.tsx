import TodoItem from './TodoItem';
import TodosUl from './Todos.styled';
import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <TodosUl>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          item={item.text}
          deleteTodo={todosCtx.removeTodo}
        />
      ))}
    </TodosUl>
  );
};

export default Todos;
