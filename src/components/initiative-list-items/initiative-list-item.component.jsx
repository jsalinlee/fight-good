import { useSelector, useDispatch } from 'react-redux';

import {
    addItemToInitiative,
    removeItemFromInitiative,
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

    return (
        <div className='initiative-list-items-container'>
            <div className='list-item-name'>{name}</div>
            <span>
                <button
                    className='field-value-change'
                    style={{ textDecoration: 'none' }}
                    onClick={addItemToList}>
                    <b>+</b>
                </button>
                <input
                    className='quantity-input-field'
                    type='number'
                    value={quantity}
                />
                <button
                    className='field-value-change'
                    style={{ textDecoration: 'none' }}
                    onClick={subtractItemFromList}>
                    <b>-</b>
                </button>
                <button
                    className='item-delete-button'
                    style={{ textDecoration: 'none' }}
                    onClick={clearItemFromList}>
                    <b>X</b>
                </button>
            </span>
        </div>
    );
};

export default InitiativeListItem;
