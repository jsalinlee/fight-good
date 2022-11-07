import { useSelector, useDispatch } from 'react-redux';

import {
    addItemToInitiative,
    removeItemFromInitiative,
    updateItemInInitiative,
    clearItemFromInitiative,
} from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';

import './initiative-list-item.styles.scss';

const InitiativeListItem = ({ item }) => {
    const { name, quantity } = item;
    const dispatch = useDispatch();
    const listItems = useSelector(selectInitiativeListItems);

    const addItemToList = () => dispatch(addItemToInitiative(listItems, item));

    const subtractItemFromList = () =>
        dispatch(removeItemFromInitiative(listItems, item));

    const clearItemFromList = () =>
        dispatch(clearItemFromInitiative(listItems, item));

    const updateItemQuantity = (event) => {
        const updatedItem = { ...item, quantity: parseInt(event.target.value) };
        return dispatch(updateItemInInitiative(listItems, updatedItem));
    };

    return (
        <div className='initiative-list-items-container'>
            <div className='list-item-name'>{name}</div>
            <div className='initiative-list-action-bar'>
                <div className='quantity-input-bar'>
                    <button
                        className='field-value-change'
                        onClick={addItemToList}>
                        <b>+</b>
                    </button>
                    <input
                        className='quantity-input-field'
                        type='number'
                        onChange={updateItemQuantity}
                        value={quantity}
                    />
                    <button
                        className='field-value-change'
                        onClick={subtractItemFromList}>
                        <b>-</b>
                    </button>
                </div>
                <button
                    className='item-delete-button'
                    onClick={clearItemFromList}>
                    <b>X</b>
                </button>
            </div>
        </div>
    );
};

export default InitiativeListItem;
