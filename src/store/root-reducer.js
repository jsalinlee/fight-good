import { combineReducers } from 'redux';
import { initiativeListReducer } from './initiative-list/initiative-list.reducer';

export const rootReducer = combineReducers({
    initiativeList: initiativeListReducer,
});
