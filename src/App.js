import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(counterReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter 
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDEcrement={() => store.dispatch({ type: 'DECREMENT' })}
          />
      </div>
    );
  }
}

export default App;
