import InitiativeList from "../../components/initiative-list/initiative-list.component";
import PlayerInput from "../../components/player-input/player-input.component";
import MonsterSearchBox from "../../components/monster-search-box/monster-search-box.component";
import './initiative-setup.styles.scss';

const InitiativeSetup = () =>{
    return (
        <div>
            <PlayerInput />
            <div className="initiative-setup-wrapper">
                <InitiativeList />
                <MonsterSearchBox />
            </div>
        </div>
    )
}

export default InitiativeSetup;