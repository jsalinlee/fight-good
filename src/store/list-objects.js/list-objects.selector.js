import { createSelector } from "reselect";

const selectListObjectsReducer = state=>state.listState;

export const selectListObjects = createSelector([selectListObjectsReducer], (list)=>list.listObjects);

export const selectListTotal = createSelector([selectListObjectsReducer],(cartItems)=>cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0))
