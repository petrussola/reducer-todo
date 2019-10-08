import React, { useReducer } from 'react';
import './App.css';

// REDUCERS

import { initialState, reducer, ON_WRITING_TASK, ON_ADDING_TASK, ON_CLEAR_TASK_TO_BE_ADDED, ON_MARKING_TASK_COMPLETE } from './reducers/reducer';

// COMPONENTS

import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

// CONTEXTS

import { todoContext } from './contexts/Todocontext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const todos = state.initialTodoList;
  const taskBeingAdded = state.todoAdded;

  const onChange = event => {
    // console.log(event.target.value);

    dispatch({
      type: ON_WRITING_TASK,
      payload: event.target.value,
    })
  }

  const addTodoItem = event => {
    event.preventDefault();
    dispatch({
      type: ON_ADDING_TASK,
      payload: {
        item: state.todoAdded,
        completed: false,
        id: Date.now(),
      },
    })
    clearTodoToBeAdded();
  }

  const clearTodoToBeAdded = () => {
    dispatch({
      type: ON_CLEAR_TASK_TO_BE_ADDED,
      payload: '',
    })
  }

  const markCompleted = (id, completed) => event => {
    // console.log('task is completed');
    event.preventDefault();
    dispatch({
      type: ON_MARKING_TASK_COMPLETE,
      payload: {id, completed: !completed},
    })
  }

  return (
    <div className="App">
      <todoContext.Provider value={{
        todos, 
        addTodoItem, 
        onChange, 
        taskBeingAdded,
        markCompleted
        }}>
        <AddTodoForm />
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
