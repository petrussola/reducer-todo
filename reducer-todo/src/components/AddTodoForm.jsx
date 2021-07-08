import React, { useContext } from 'react';

// CONTEXTS

import { todoContext } from '../contexts/Todocontext';

export default function AddTodoForm() {

    const {addTodoItem, onChange, taskBeingAdded} = useContext(todoContext);

    return (
        <div>
            <input type='text' value={taskBeingAdded} onChange={onChange} />
            <button onClick={addTodoItem}>Add todo</button>
        </div>
    )
}