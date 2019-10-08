import React, { useReducer } from 'react';
import './App.css';

// REDUCERS

import { initialState, reducer } from './reducers/reducer';

// COMPONENTS



function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
