import React from 'react';
import Item from './TodoItem.styled';

type Props = {
  item: string;
  id: string;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ item, id, deleteTodo }: Props) => {
  const onTodoClick = () => {
    deleteTodo(id);
  };
  return <Item onClick={onTodoClick}>{item}</Item>;
};

export default TodoItem;
