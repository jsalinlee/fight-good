import { useDispatch, useSelector } from 'react-redux';

import { addItemToInitiative } from '../../store/initiative-list/initiative-list.action';

import './player-input.styles.scss';

const PlayerInput = () => {
    const dispatch = useDispatch();
    // const initiativeListItems = useSelector();

    const addPlayerToInitiative = (event) => {
        dispatch(addItemToInitiative());
    };

    return (
        <div className='player-input-container'>
            <h3>
                <span className='player-input-label'>
                    Enter Player Initiatives
                </span>
            </h3>
            <div className='player-input-fields-container'>
                <div className='input-field-container'>
                    <label className='player-name-label'>Player Name</label>
                    <input
                        className='player-name-input'
                        type='text'
                        placeholder="Derrick Malon'Zo"
                    />
                </div>
                <div className='input-field-container'>
                    <label className='player-initiative-label'>
                        Initiative Roll
                    </label>
                    <input
                        className='player-initiative-input'
                        type='number'
                        placeholder='0'
                    />
                </div>
                <button className='add-player'>&#10133;</button>
            </div>
        </div>
    );
};

export default PlayerInput;
