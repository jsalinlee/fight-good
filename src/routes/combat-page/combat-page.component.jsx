import { useEffect, useState } from 'react';

import CombatInitiativeTracker from '../../components/combat-initiative-tracker/combat-initiative-tracker.component';
import ItemDetailsContainer from '../../components/item-details-container/item-details-container.component';
import { getCharacterData } from '../../utils/http/http.utils';

import './combat-page.styles.scss';

const CombatPage = () => {
    const [character, setCharacter] = useState('goblin');
    useEffect(() => {
        async function fetchCharacterData() {
            const data = await getCharacterData(character);
            console.log(data);
        }
        fetchCharacterData();
    }, []);

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
