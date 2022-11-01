import { createAction } from '../../utils/reducer/reducer.utils';
import { INITIATIVE_LIST_ACTION_TYPES } from './initiative-list.types';

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
            listItem.id === itemToAdd.id
                ? { ...listItem, quantity: listItem.quantity + 1 }
                : listItem
        );
    }
    return [...initiativeListItems, { ...itemToAdd, quantity: 1 }];
};

const removeInitiativeItem = (initiativeListItems, objectToRemove) => {
    return initiativeListItems.filter(
        (listItem) => listItem.name !== objectToRemove.name
    );
};

const clearInitiativeItem = (initiativeListItems, objectToSubtract) => {
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
