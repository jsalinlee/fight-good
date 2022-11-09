import './combat-initiative-item.styles.scss';

const CombatInitiativeItem = ({ item }) => {
    const { name, quantity, isFocus } = item;
    let curItemFocus = 'combat-item-unfocus';

    if (isFocus) {
        curItemFocus = 'combat-item-focus';
    }

    return (
        <div className={`combat-item-wrapper ${curItemFocus}`}>
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
