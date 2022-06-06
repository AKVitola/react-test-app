import { combineReducers } from 'redux';
import { usersReducer, selectedUserReducer } from './usersReducer';
import { productsReducer, selectedProductReducer } from './productsReducer';
import { photosReducer } from './photosReducer';

const rootReducer = combineReducers({
    allUsers: usersReducer,
    user: selectedUserReducer,
    productListing: productsReducer,
    product: selectedProductReducer,
    gallery: photosReducer
});

export default rootReducer;
