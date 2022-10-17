import InitiativeList from "../../components/initiative-list.component/initiative-list.component";
import PlayerInput from "../../components/player-input/player-input.component";

const InitiativeSetup = () =>{
    return (
        <div>
            <PlayerInput />
            This is where initiative setup goes
            <InitiativeList />
        </div>
    )
}

export default InitiativeSetup;