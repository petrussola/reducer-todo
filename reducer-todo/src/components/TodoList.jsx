import React, { useContext } from 'react';

// COMPONENTS

import TodoItem from "./TodoItem";

// CONTEXTS

import { todoContext } from '../contexts/Todocontext';

export default function TodoList() {
    
    const {todos, markCompleted} = useContext(todoContext);

  return (
    <div>
        {
        todos.map(todo => {
            return <TodoItem 
            key={todo.id} 
            todo={todo} 
            markCompleted={markCompleted}
            />
        })
        }
    </div>
    );
}
