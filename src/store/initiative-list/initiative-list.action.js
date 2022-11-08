import { createAction } from '../../utils/reducer/reducer.utils';
import { INITIATIVE_LIST_ACTION_TYPES } from './initiative-list.types';
import { INITIATIVE_LIST_INITIAL_STATE } from './initiative-list.reducer';

//CHANGE NAME BACK TO ID WHEN WE FIX IT
const addInitiativeItem = (initiativeListItems, itemToAdd) => {
    if (itemToAdd.hasOwnProperty('isPlayer')) {
        const existingPlayer = initiativeListItems.find(
            (listItem) => itemToAdd.name === listItem.name
        );
        if (existingPlayer) {
            alert(
                `Player ${existingPlayer.name} already exists in the initiative order`
            );
            return initiativeListItems;
        }
        return [...initiativeListItems, itemToAdd];
    }
    const existingItem = initiativeListItems.find(
        (listItem) => listItem.name === itemToAdd.name
    );

    if (existingItem) {
        return initiativeListItems.map((listItem) =>
            listItem.name === itemToAdd.name
                ? {
                      ...listItem,
                      quantity: listItem.quantity + 1,
                  }
                : listItem
        );
    }
    return [
        ...initiativeListItems,
        { ...itemToAdd, quantity: 1, isFocus: false },
    ];
};

const removeInitiativeItem = (initiativeListItems, objectToSubtract) => {
    let newInitiativeList = initiativeListItems;

    newInitiativeList = initiativeListItems.filter((listItem) => {
        if (listItem.name === objectToSubtract.name) {
            if (listItem.quantity - 1 <= 0) return false;
        }
        return true;
    });

    return newInitiativeList.map((listItem) =>
        listItem.name === objectToSubtract.name
            ? { ...listItem, quantity: listItem.quantity - 1 }
            : listItem
    );
};

const updateInitiativeItem = (initiativeListItems, updatedItem) => {
    const existingItem = initiativeListItems.find(
        (listItem) => updatedItem.name === listItem.name
    );
    if (existingItem) {
        return initiativeListItems.map((listItem) =>
            listItem.name === updatedItem.name ? updatedItem : listItem
        );
    }
};

const clearInitiativeItem = (initiativeListItems, objectToRemove) => {
    return initiativeListItems.filter(
        (listItem) => listItem.name !== objectToRemove.name
    );
};

export const addItemToInitiative = (initiativeListItems, itemToAdd) => {
    const newInitiativeList = addInitiativeItem(initiativeListItems, itemToAdd);
    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};

export const removeItemFromInitiative = (initiativeListItems, itemToRemove) => {
    const newInitiativeList = removeInitiativeItem(
        initiativeListItems,
        itemToRemove
    );
    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};

export const updateItemInInitiative = (initiativeListItems, updatedItem) => {
    const newInitiativeList = updateInitiativeItem(
        initiativeListItems,
        updatedItem
    );
    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};

export const clearItemFromInitiative = (initiativeListItems, itemToClear) => {
    const newInitiativeList = clearInitiativeItem(
        initiativeListItems,
        itemToClear
    );
    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};

export const clearAllInitiativeItems = (listItem) => {
    let newInitiativeList = listItem;

    if (window.confirm('Are you sure?'))
        newInitiativeList = INITIATIVE_LIST_INITIAL_STATE.initiativeListItems;

    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};
