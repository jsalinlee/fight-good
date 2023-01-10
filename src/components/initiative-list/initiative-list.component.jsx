import { useDispatch, useSelector } from 'react-redux';

import { clearAllInitiativeItems } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import InitiativeListItem from '../initiative-list-item/initiative-list-item.component';

import './initiative-list.styles.scss';

const InitiativeList = () => {
    const dispatch = useDispatch();
    const initiativeListItems = useSelector(selectInitiativeListItems);
    const clearList = () => dispatch(clearAllInitiativeItems());
    return (
        <>
            <div className='initiative-list-wrapper'>
                <div className='initiative-list-header'>
                    <span className='initiative-list-title'>
                        Initiative List
                    </span>
                </div>
                <div className='initiative-list-body'>
                    {initiativeListItems.map((item) => (
                        <InitiativeListItem key={item.id} item={item} />
                    ))}
                    <button
                        className='clear-list-button btn btn-danger '
                        onClick={clearList}>
                        Delete List
                    </button>
                </div>
            </div>
        </>
    );
};

export default InitiativeList;
