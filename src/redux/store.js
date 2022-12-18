import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import hotDealsReducer from './hotDealsRedux';
import feedbackReducer from './feedbackRedux';
import dealsReducer from './dealsRedux';
import compareReducer from './compareListRedux';
import displaysizeReducer from './displaysizeRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  hotDeals: hotDealsReducer,
  compareList: compareReducer,
  clientFeedback: feedbackReducer,
  deals: dealsReducer,
  display: displaysizeReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
