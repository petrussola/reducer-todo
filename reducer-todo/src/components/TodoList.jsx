import React, { useContext } from 'react';

// COMPONENTS

import TodoItem from "./TodoItem";

// CONTEXTS

import { todoContext } from '../contexts/Todocontext';

export default function TodoList() {
    
    const {todos, markCompleted, clearCompleted} = useContext(todoContext);

  return (
    <div>
        <div>
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
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
