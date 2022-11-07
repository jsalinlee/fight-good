import { useDispatch, useSelector } from 'react-redux';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import CombatInitiativeItem from '../combat-initiative-item/combat-initiative-item.component';

const CombatInitiativeTracker = () => {
    const dispatch = useDispatch();
    const CombatInitiativeItems = useSelector(selectInitiativeListItems);

    return (
        <div>
            Initiative Tracker
            {CombatInitiativeItems.map((item) => (
                <CombatInitiativeItem
                    key={`${item.name}+${item.sources}`}
                    item={item}
                />
            ))}
        </div>
    );
};

export default CombatInitiativeTracker;
