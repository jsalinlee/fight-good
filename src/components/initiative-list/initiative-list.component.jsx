import { useSelector } from 'react-redux';
import InitiativeListItem from '../initiative-list-items/initiative-list-item.component';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import './initiative-list.styles.scss';

const InitiativeList = () => {
    const initiativeListItems = useSelector(selectInitiativeListItems);
    return (
        <div className='initiative-list-container'>
            {initiativeListItems.map((item) => (
                <InitiativeListItem
                    key={`${item.name}+${item.sources}`}
                    item={item}
                />
            ))}
        </div>
    );
};

export default InitiativeList;
