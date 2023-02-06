import { useEffect, useState } from 'react';

import CombatInitiativeTracker from '../../components/combat-initiative-tracker/combat-initiative-tracker.component';
import ItemDetailsContainer from '../../components/item-details-container/item-details-container.component';
import { getCharacterData } from '../../utils/http/http.utils';

import './combat-page.styles.scss';

const CombatPage = () => {
    const [characterData, setCharacterData] = useState({});

    //MOVE TO COMBAT INFO PAGE?
    useEffect(() => {
        async function fetchCharacterData() {
            const data = await getCharacterData('goblin');
            //console.log(data);
            setCharacterData(data);
        }
        fetchCharacterData();
    }, []);

    return (
        <div className='combat-container'>
            {console.log(characterData.name)}
            <CombatInitiativeTracker />
            <div className='combat-monster-stats-wrapper'>
                <ItemDetailsContainer item={characterData} />
            </div>
            <button>button</button>
        </div>
    );
};

export default CombatPage;
