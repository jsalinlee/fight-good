import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToInitiative } from '../../store/initiative-list/initiative-list.action';
import { selectInitiativeListItems } from '../../store/initiative-list/initiative-list.selector';

import './player-input.styles.scss';

const PLAYER_INITIAL_STATE = {
    name: '',
    initiative: 0,
    isPlayer: true,
};

const PlayerInput = () => {
    const dispatch = useDispatch();
    const initiativeListItems = useSelector(selectInitiativeListItems);
    const [player, setPlayer] = useState(PLAYER_INITIAL_STATE);

    const onPlayerNameChange = (event) => {
        setPlayer({
            ...player,
            name: event.target.value,
        });
    };

    const onPlayerInitiativeChange = (event) => {
        setPlayer({
            ...player,
            initiative: event.target.value,
        });
    };

    const addPlayerToInitiative = () => {
        if (!player.name) {
            alert("Player name can't be empty");
            return;
        }
        dispatch(addItemToInitiative(initiativeListItems, player));
        setPlayer(PLAYER_INITIAL_STATE);
    };

    return (
        <div className='player-input-wrapper'>
            <div className='player-input-header'>Enter Player Initiatives</div>
            <div className='player-input-body row gx-0'>
                <div className='player-input-field col-6'>
                    <label className='player-name-label'>Player Name</label>
                    <input
                        onChange={onPlayerNameChange}
                        className='player-name-input form-control'
                        type='text'
                        placeholder="Derrick Malon'Zo"
                        value={player.name}
                    />
                </div>
                <div className='player-input-initiative-field col-4'>
                    <label className='player-initiative-label'>Roll</label>
                    <input
                        onChange={onPlayerInitiativeChange}
                        className='player-initiative-input form-control'
                        type='number'
                        placeholder='0'
                        value={player.initiative}
                    />
                </div>
                <button
                    className='add-player btn btn-primary'
                    onClick={addPlayerToInitiative}></button>
            </div>
        </div>
    );
};

export default PlayerInput;
