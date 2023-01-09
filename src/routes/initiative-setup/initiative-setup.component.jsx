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
        <div className='initiative-setup-wrapper container-fluid'>
            <div className='content-wrapper row'>
                <div className='sidebar-container col-12 col-lg-4'>
                    <PlayerInput />
                    <InitiativeList />
                </div>
                <div className='main-container h-100 col-12 col-lg-8'>
                    <MonsterSearchBox />
                </div>
            </div>
            <div className='footer-wrapper row justify-content-end'>
                <button
                    type='button'
                    className='btn btn-primary col-2'
                    onClick={goToCombatHandler}>
                    Start Combat
                </button>
            </div>
        </div>
    );
};

export default InitiativeSetup;
