import InitiativeList from "../../components/initiative-list/initiative-list.component";
import PlayerInput from "../../components/player-input/player-input.component";
import MonsterSearchBox from "../../components/monster-search-box/monster-search-box.component";

const InitiativeSetup = () =>{
    return (
        <div>
            <PlayerInput />
            This is where initiative setup goes
            <InitiativeList />
            <MonsterSearchBox />
        </div>
    )
}

export default InitiativeSetup;