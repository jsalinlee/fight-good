import InitiativeList from '../../components/initiative-list/initiative-list.component';
import PlayerInput from '../../components/player-input/player-input.component';
import MonsterSearchBox from '../../components/monster-search-box/monster-search-box.component';
import { useSelector, useDispatch } from 'react-redux';
import { clearAllInitiativeItems } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';

import './initiative-setup.styles.scss';

const InitiativeSetup = () => {
    const dispatch = useDispatch();
    const listItems = useSelector(selectInitiativeListItems);

    const clearList = () => dispatch(clearAllInitiativeItems(listItems));

    return (
        <div className='initiative-setup-wrapper'>
            <div className='sidebar-container'>
                <PlayerInput />
                <div className='initiative-list-block-wrapper'>
                    <InitiativeList />
                    <button className='clear-list-button' onClick={clearList}>
                        Delete List
                    </button>
                </div>
            </div>
            <MonsterSearchBox />
        </div>
    );
};

export default InitiativeSetup;
