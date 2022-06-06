import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = configureStore({
    reducer: rootReducer,
    initialState,
    composedEnhancer
});

export default store;