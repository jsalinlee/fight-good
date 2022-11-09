import './combat-page.styles.scss';
import CombatInitiativeTracker from '../../components/combat-initiative-tracker/combat-initiative-tracker.component';
import ItemDetailsContainer from '../../components/item-details-container/item-details-container.component';

const CombatPage = () => {
    return (
        <div className='combat-container'>
            <CombatInitiativeTracker />
            <div className='combat-monster-stats-wrapper'>
                <ItemDetailsContainer />
            </div>
            <button>button</button>
        </div>
    );
};

export default CombatPage;
