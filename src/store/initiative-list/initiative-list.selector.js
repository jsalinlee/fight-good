import { createSelector } from 'reselect';

const selectInitiativeListReducer = (state) => state.initiativeList;

export const selectInitiativeListItems = createSelector(
    [selectInitiativeListReducer],
    (initiativeList) => initiativeList.initiativeListItems
);
