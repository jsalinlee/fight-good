import { createSelector } from "reselect";

const selectListObjectsReducer = state=>state.listState;

export const selectListObject = createSelector([selectListObjectReducer], (list)=>list.listObjects);

export const selectListTotal = createSelector([selectListObject],(cartItems)=>cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0))
