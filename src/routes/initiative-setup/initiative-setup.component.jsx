import InitiativeList from '../../components/initiative-list/initiative-list.component';
import PlayerInput from '../../components/player-input/player-input.component';
import MonsterSearchBox from '../../components/monster-search-box/monster-search-box.component';

import './initiative-setup.styles.scss';

const InitiativeSetup = () => {
    return (
        <div className='initiative-setup-container'>
            <div className='sidebar-container'>
                <PlayerInput />
                <InitiativeList />
            </div>
            <MonsterSearchBox />
        </div>
    );
};

export default InitiativeSetup;
