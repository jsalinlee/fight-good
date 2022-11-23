import { clearAllInitiativeItems } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import { useDispatch, useSelector } from 'react-redux';
import InitiativeListItem from '../initiative-list-item/initiative-list-item.component';

import './initiative-list.styles.scss';

const InitiativeList = () => {
    const dispatch = useDispatch();
    const initiativeListItems = useSelector(selectInitiativeListItems);
    const clearList = () => dispatch(clearAllInitiativeItems());
    return (
        <div>
            <div className='initiative-list-container'>
                <div className='initiative-list-header'>
                    <span className='initiative-list-title'>
                        Initiative List
                    </span>
                </div>
                {initiativeListItems.map((item) => (
                    <InitiativeListItem key={item.id} item={item} />
                ))}
            </div>
            <button className='clear-list-button' onClick={clearList}>
                Delete List
            </button>
        </div>
    );
};

export default InitiativeList;
