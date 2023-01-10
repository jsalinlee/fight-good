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
        <div className='monster-search-item-container container'>
            <div className='row'>
                <span className='monster-name col-4'>{name}</span>
                <span className='monster-cr col-2'>{cr}</span>
                <span className='monster-size col-2'>{size}</span>
                <span className='monster-type col-2'>{type}</span>
                <button
                    className='monster-add-to-list col-1'
                    style={{ textDecoration: 'none' }}
                    onClick={addItemtoList}>
                    <b>Add Group</b>
                </button>
            </div>
        </div>
    );
};

export default MonsterSearchItem;
