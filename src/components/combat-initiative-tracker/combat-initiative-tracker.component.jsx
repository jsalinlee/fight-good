import { useDispatch, useSelector } from 'react-redux';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import CombatInitiativeItem from '../combat-initiative-item/combat-initiative-item.component';
import './combat-initiative-tracker.styles.scss';

const CombatInitiativeTracker = () => {
    const dispatch = useDispatch();
    const CombatInitiativeItems = useSelector(selectInitiativeListItems);

    return (
        <div className='combat-tracker-wrapper'>
            <div className='combat-tracker-header-container'>
                Initiative Tracker
            </div>
            <div className='test-overflow'>
                {CombatInitiativeItems.map((item) => (
                    <CombatInitiativeItem
                        key={`${item.name}+${item.sources}`}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CombatInitiativeTracker;
