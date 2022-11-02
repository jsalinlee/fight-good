import { INITIATIVE_LIST_ACTION_TYPES } from './initiative-list.types';

export const INITIATIVE_LIST_INITIAL_STATE = {
    initiativeListItems: [],
};

export const initiativeListReducer = (
    state = INITIATIVE_LIST_INITIAL_STATE,
    action = {}
) => {
    const { type, payload } = action;

    switch (type) {
        case INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS:
            return {
                ...state,
                initiativeListItems: payload,
            };
        default:
            return state;
    }
};
