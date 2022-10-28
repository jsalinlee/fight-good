import { LIST_ACTION_TYPES } from "./list-objects.types";

export const LIST_INITIAL_STATE = {
    listCount: 0,
    listObjects: [],
};

export const listStateReducer = ( state=LIST_INITIAL_STATE, action={} ) =>{
    const { type, payload } = action;

    switch(type){
        case LIST_ACTION_TYPES.SET_LIST_ITEMS:
            return{
                ...state,
                listObjects: payload,
            }
        case LIST_ACTION_TYPES.SET_LIST_COUNT:
            return{
                ...state,
                listCount: payload
            }
        default:
            return state;
    }
}