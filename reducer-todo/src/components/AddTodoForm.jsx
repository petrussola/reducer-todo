import React, { useContext } from 'react';

// CONTEXTS

import { todoContext } from '../contexts/Todocontext';

export default function AddTodoForm() {

    const {addTodoItem} = useContext(todoContext);

    return (
        <div>
            <input type='text' />
            <button onClick={addTodoItem}>Add todo</button>
        </div>
    )
}