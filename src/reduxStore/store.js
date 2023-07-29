// store.js
import { createStore } from 'redux';

// Reducer - a pure function that takes the current state and an action, and returns a new state
const userReducer = (state = {user: null}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(userReducer);

export default store;
