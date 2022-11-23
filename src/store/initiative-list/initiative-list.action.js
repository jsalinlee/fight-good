import { createAction } from '../../utils/reducer/reducer.utils';
import { INITIATIVE_LIST_ACTION_TYPES } from './initiative-list.types';
import { INITIATIVE_LIST_INITIAL_STATE } from './initiative-list.reducer';

import CharacterGroup from '../../assets/js/CharacterGroup';
import Character from '../../assets/js/Character';

//CHANGE NAME BACK TO ID WHEN WE FIX IT
const addInitiativeItem = (initiativeListItems, itemToAdd) => {
    const { name, ac, hp } = itemToAdd;

    if (itemToAdd.isPlayer) {
        const newPlayer = new CharacterGroup(name, true);
        const existingPlayer = initiativeListItems.find(
            (listItem) => newPlayer.name === listItem.name
        );
        if (existingPlayer) {
            alert(
                `Player ${existingPlayer.name} already exists in the initiative order`
            );
            return initiativeListItems;
        }
        return [...initiativeListItems, newPlayer];
    }

    const newGroup = new CharacterGroup(name);
    newGroup.addCharacter(new Character(name, ac, hp, false));
    const existingItem = initiativeListItems.findLast(
        (listItem) => listItem.name === newGroup.name
    );
    if (existingItem) {
        return [
            ...initiativeListItems,
            { ...newGroup, groupNum: existingItem.groupNum + 1 },
        ];
    }
    return [...initiativeListItems, newGroup];
};

const addQuantity = (initiativeListItems, itemToUpdate) => {
    let newInitiativeList = initiativeListItems;

    return newInitiativeList.map((listItem) => {
        if (listItem.id === itemToUpdate.id) {
            return {
                ...listItem,
                quantity: listItem.quantity + 1,
                characters: [
                    ...listItem.characters,
                    new Character(
                        listItem.name,
                        listItem.ac,
                        listItem.hp,
                        listItem.isPlayer
                    ),
                ],
            };
        }
    });
};

const removeInitiativeItem = (initiativeListItems, objectToSubtract) => {
    let newInitiativeList = initiativeListItems;

    newInitiativeList = initiativeListItems.filter((listItem) => {
        if (listItem.id === objectToSubtract.id) {
            if (listItem.quantity - 1 <= 0) return false;
        }
        return true;
    });

    return newInitiativeList.map((listItem) =>
        listItem.id === objectToSubtract.id
            ? { ...listItem, quantity: listItem.quantity - 1 }
            : listItem
    );
};

const updateInitiativeItem = (initiativeListItems, updatedItem) => {
    const existingItem = initiativeListItems.find(
        (listItem) => updatedItem.id === listItem.id
    );
    if (existingItem) {
        return initiativeListItems.map((listItem) =>
            listItem.id === updatedItem.id ? updatedItem : listItem
        );
    }
};

const clearInitiativeItem = (initiativeListItems, objectToRemove) => {
    return initiativeListItems.filter(
        (listItem) => listItem.id !== objectToRemove.id
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

export const addObjectQuantity = (initiativeListItems, itemToUpdate) => {
    const newInitiativeList = addQuantity(initiativeListItems, itemToUpdate);
    return createAction(
        INITIATIVE_LIST_ACTION_TYPES.SET_INITIATIVE_LIST_ITEMS,
        newInitiativeList
    );
};
