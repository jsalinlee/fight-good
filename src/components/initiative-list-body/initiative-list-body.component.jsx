import { useDispatch, useSelector } from 'react-redux';
import { clearAllInitiativeItems } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import InitiativeListItem from '../initiative-list-item/initiative-list-item.component';
import './initiative-list-body.styles.scss';

const InitiativeListBody = () => {
    const dispatch = useDispatch();
    const initiativeListItems = useSelector(selectInitiativeListItems);
    const clearList = () => dispatch(clearAllInitiativeItems());

    return (
        <div className='initiative-list-body-wrapper'>
            {initiativeListItems.map((item) => (
                <InitiativeListItem
                    key={`${item.name}+${item.sources}`}
                    item={item}
                />
            ))}
            <button className='clear-list-button' onClick={clearList}>
                Delete List
            </button>
        </div>
    );
};

export default InitiativeListBody;
