import React, { useContext } from 'react';


export default function TodoItem({todo, markCompleted}) {

    return (
        <div>
            <p onClick={markCompleted(todo.id, todo.completed)}>{todo.item}</p>
        </div>
    )
}