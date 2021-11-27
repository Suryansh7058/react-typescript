import React, { useRef, useContext } from 'react';
import Form from './NewTodo.styled';
import { TodosContext } from '../store/todos-context';

const NewTodo = () => {
  const todoCtx = useContext(TodosContext);
  const todoRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      // throw an error
      return;
    }
    todoCtx.addTodo(enteredTodo);
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input id="todo" type="text" ref={todoRef} />
      <button type="submit">Add Todo</button>
    </Form>
  );
};

export default NewTodo;
