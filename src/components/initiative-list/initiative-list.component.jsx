import { useSelector } from 'react-redux';
import InitiativeListItems from '../initiative-list-items/initiative-list-items.component';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import './initiative-list.styles.scss';

const InitiativeList = () => {
    const listItems = useSelector(selectInitiativeListItems);
    return (
        <div className='initiative-list-container'>
            {listItems.map((item) => (
                <InitiativeListItems key={item.id} item={item} />
            ))}
        </div>
    );
};

export default InitiativeList;
