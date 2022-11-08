import './combat-page.styles.scss';
//import CombatInitiativeTracker from '../../components/combat-initiative-tracker/combat-initiative-tracker.component';
import ItemDetailsContainer from '../../components/item-details-container/item-details-container.component';
import InitiativeList from '../../components/initiative-list/initiative-list.component';

const CombatPage = () => {
    return (
        <div className='combat-container'>
            <div className='combat-initiative-tracker-wrapper'>
                <InitiativeList />
            </div>
            <div className='combat-monster-stats-wrapper'>
                <ItemDetailsContainer />
            </div>
            <button>button</button>
        </div>
    );
};

export default CombatPage;
