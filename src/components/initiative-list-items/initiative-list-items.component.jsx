import { Link } from 'react-router-dom';
import './initiative-list-items.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItemToInitiative,
    removeItemFromInitiative,
    clearItemFromInitiative,
} from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';

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
                <Link
                    className='field-value-change'
                    style={{ textDecoration: 'none' }}
                    onClick={addItemToList}>
                    <b>+</b>
                </Link>
                <input
                    className='quantity-input-field'
                    type='number'
                    value={quantity}
                />
                <Link
                    className='field-value-change'
                    style={{ textDecoration: 'none' }}
                    onClick={subtractItemFromList}>
                    <b>-</b>
                </Link>
                <Link
                    className='item-delete-button'
                    style={{ textDecoration: 'none' }}
                    onClick={clearItemFromList}>
                    <b>X</b>
                </Link>
            </span>
        </div>
    );
};

export default InitiativeListItem;
