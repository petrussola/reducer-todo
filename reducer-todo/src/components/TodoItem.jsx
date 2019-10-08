import React, { useContext } from 'react';


export default function TodoItem({todo, markCompleted}) {
    return (
        <div>
            <p onClick={markCompleted(todo.id, todo.completed)} style={{color: todo.completed ? 'green' : 'red'}}>{todo.item}</p>
        </div>
    )
}