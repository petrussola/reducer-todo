import React from 'react';

export default function TodoItem({todo}) {
    return (
        <div>
            <p>{todo.item}</p>
        </div>
    )
}