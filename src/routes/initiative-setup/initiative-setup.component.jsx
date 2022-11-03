import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useNavigationType } from 'react-router-dom';

import { clearAllInitiativeItems } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';
import InitiativeList from '../../components/initiative-list/initiative-list.component';
import MonsterSearchBox from '../../components/monster-search-box/monster-search-box.component';
import PlayerInput from '../../components/player-input/player-input.component';

import './initiative-setup.styles.scss';

const InitiativeSetup = () => {
    const navigate = useNavigate();
    const listItems = useSelector(selectInitiativeListItems);

    const goToCombatHandler = () => {
        navigate('/combatpage');
    };

    return (
        <div className='initiative-setup-wrapper'>
            <div className='content-wrapper'>
                <div className='sidebar-container'>
                    <PlayerInput />
                    <InitiativeList />
                </div>
                <div className='main-container'>
                    <MonsterSearchBox />
                </div>
            </div>
            <div className='footer-wrapper'>
                <button onClick={goToCombatHandler}>Start Combat</button>
            </div>
        </div>
    );
};

export default InitiativeSetup;
