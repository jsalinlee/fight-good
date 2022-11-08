import InitiativeListBody from '../initiative-list-body/initiative-list-body.component';
import './initiative-list.styles.scss';

const InitiativeList = () => {
    return (
        <>
            <div className='initiative-list-container'>
                <div className='initiative-list-header'>
                    <span className='initiative-list-title'>
                        Initiative List
                    </span>
                </div>
                <InitiativeListBody />
            </div>
        </>
    );
};

export default InitiativeList;
