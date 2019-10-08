import React, { useReducer } from 'react';
import './App.css';

// REDUCERS

import { initialState, reducer } from './reducers/reducer';

// COMPONENTS

import TodoList from './components/TodoList';

// CONTEXTS

import { todoContext } from './contexts/Todocontext';

function App() {
  const [todos, setTodos] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <todoContext.Provider value={todos}>
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
