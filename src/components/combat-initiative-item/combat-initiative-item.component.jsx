const CombatInitiativeItem = ({ item }) => {
    const { name, quantity } = item;

    return (
        <div>
            {name} {quantity}
            <button> remove</button>
        </div>
    );
};

export default CombatInitiativeItem;
