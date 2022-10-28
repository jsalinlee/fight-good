import { combineReducers } from 'redux';
import { listStateReducer } from './list-objects.js/list-objects.reducer';

export const rootReducer = combineReducers({
    listState: listStateReducer,
})