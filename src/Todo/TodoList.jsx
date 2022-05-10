import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({todo}) {
    
  return (
    <>
    {todo.map(i=>(
        <TodoItem key={i.id} {...i} />
    ))}
    </>
  )
}
