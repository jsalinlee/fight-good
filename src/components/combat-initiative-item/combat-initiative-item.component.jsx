import './combat-initiative-item.styles.scss';

const CombatInitiativeItem = ({ item }) => {
    const { name, quantity } = item;

    return (
        <div className='combat-initiative-item-wrapper'>
            <div className='combat-item-container'>
                <span className='combat-initiative-item-name'>{name}</span>
                <span className='remove-from-combat-button'>
                    <button>remove</button>
                </span>
            </div>
        </div>
    );
};

export default CombatInitiativeItem;
