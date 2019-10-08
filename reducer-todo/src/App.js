import React, { useReducer } from 'react';
import './App.css';

// REDUCERS

import { initialState, reducer } from './reducers/reducer';

// COMPONENTS

import TodoList from './components/TodoList';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
