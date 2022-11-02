import { Link } from 'react-router-dom';
import './monster-search-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import { addItemToInitiative } from '../../store/initiative-list/initiative-list.action';

const MonsterSearchItem = ({ monster }) => {
    const { name, cr, size, type } = monster;
    const dispatch = useDispatch();
    const listItems = useSelector(selectInitiativeListItems);

    const addItemtoList = () =>
        dispatch(addItemToInitiative(listItems, monster));

    return (
        <div className='monster-search-item-container'>
            <span className='monster-name'>{name}</span>
            <span className='monster-cr'>{cr}</span>
            <span className='monster-size'>{size}</span>
            <span className='monster-type'>{type}</span>
            <button
                className='monster-add-to-list'
                style={{ textDecoration: 'none' }}
                onClick={addItemtoList}>
                <b>+</b>
            </button>
        </div>
    );
};

export default MonsterSearchItem;
