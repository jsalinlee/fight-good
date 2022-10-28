import { LIST_ACTION_TYPES } from './list-objects.types';
// import { createAction } from "../../utils/reducer/reducer.utils";    MAKE THIS FILE




//export const setIsCartOpen = (boolean) =>createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

//CHECK JSON FOR OBJECT PARAMETERS. SET ID REFERENCE ACCORDINGLY
//Quantity Values need to be specified

//HELPERS
const addObject = (listObjects, objectToAdd) =>{
    const existingListObject = listObjects.find((listObject)=>listObject.name===objectToAdd.name);
    if(existingListObject){
        return listObjects.map((listObject)=>listObject.name===objectToAdd.name ? {...listObject, quantity:listObject.quantity + 1} : listObject);
    }
    return [...listObjects,{...objectToAdd, quantity:1}];
}

const deleteObject = (listObjects,objectToDelete) =>{
    return listObjects.filter((listObject)=>listObject.name != objectToDelete.name);
}

const subtractObject = (listObjects,objectToSubtract) =>{
    let updateList = listObjects;

    updateList = listObjects.filter((listObject)=>{
        if(listObject.name===objectToSubtract.name){
            if(listObject.quantity-1 <= 0)
               return false;
        }
        return true;
    })

    return updateCart.map((listObject)=>listObject.name===objectToSubtract.name ? {...listObject, quantity:listObject.quantity - 1} : listObject);
}

//HELPERS

export const addListObject = (listObjects, objectToAdd) =>{
    const updatedList = addObject(listObjects, objectToAdd);
    return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, updatedList);
}

export const subtractListObject = (listObjects, objectToSubtract) =>{
    const updatedList = subtractObject(listObjects,objectToSubtract);
    return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, updatedList);
}

export const deleteListObject = (listObjects, objectToDelete) =>{
    const updatedList = deleteObject(listObjects,objectToDelete);
    return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, updatedList);
}

