import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    addItemToInitiative,
    removeItemFromInitiative,
    updateItemInInitiative,
    clearItemFromInitiative,
    addObjectQuantity,
} from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';

import './initiative-list-item.styles.scss';

const InitiativeListItem = ({ item }) => {
    const { name, quantity, groupNum, isPlayer } = item;
    const dispatch = useDispatch();
    const listItems = useSelector(selectInitiativeListItems);

    // (TODO) Use quantity action
    const quantityAdd = () => dispatch(addObjectQuantity(listItems, item));

    // (TODO) Use quantity action
    const subtractItemFromList = () =>
        dispatch(removeItemFromInitiative(listItems, item));

    const clearItemFromList = () =>
        dispatch(clearItemFromInitiative(listItems, item));

    const updateItemQuantity = (event) => {
        const updatedItem = { ...item, quantity: parseInt(event.target.value) };
        return dispatch(updateItemInInitiative(listItems, updatedItem));
    };

    if (isPlayer) {
        return (
            <div className='initiative-list-item-wrapper container px-4 py-3'>
                <div className='list-item-name row mb-1'>{name}</div>
                <div className='initiative-list-action-bar row'>
                    <div className='list-item-description col g-0 m-auto'>
                        Initiative Roll: {isPlayer}
                    </div>
                    <button
                        className='btn btn-danger item-delete-button col-1'
                        onClick={clearItemFromList}></button>
                </div>
            </div>
        );
    }

    return (
        <div className='initiative-list-item-wrapper container px-4 py-3'>
            <div className='list-item-name row mb-1'>
                {name} Group {groupNum}
            </div>
            <div className='initiative-list-action-bar row'>
                <div className='quantity-input-bar input-group col g-0 me-5'>
                    <button className='btn btn-dark' onClick={quantityAdd}>
                        <b>+</b>
                    </button>
                    <input
                        className='form-control'
                        type='number'
                        onChange={updateItemQuantity}
                        value={quantity}
                    />
                    <button
                        className='btn btn-dark'
                        onClick={subtractItemFromList}>
                        <b>-</b>
                    </button>
                </div>
                <button
                    className='btn btn-danger item-delete-button col-1'
                    onClick={clearItemFromList}></button>
            </div>
        </div>
    );
};

export default InitiativeListItem;
