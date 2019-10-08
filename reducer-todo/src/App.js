import React, { useReducer } from 'react';
import './App.css';

// REDUCERS

import { initialState, reducer } from './reducers/reducer';

// COMPONENTS

import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

// CONTEXTS

import { todoContext } from './contexts/Todocontext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const todos = state.initialTodoList;

  const addTodoItem = event => {
    console.log('yay');
  }

  return (
    <div className="App">
      <todoContext.Provider value={{todos, addTodoItem}}>
        <AddTodoForm />
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
