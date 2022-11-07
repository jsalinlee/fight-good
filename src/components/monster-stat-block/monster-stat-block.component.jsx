const MonsterStatBlock = ({ item }) => {
    const { name, cr, size, type, alignment, ac, hp, init } = { item };
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <span>Challenge Rating: {cr}</span>
                <span>Size: {size}</span>
                <span>Type: {type}</span>
                <span>Alignment: {alignment}</span>
                <span>Armor Class: {ac}</span>
                <span> Health: {hp}</span>
                <span> Initiative Modifier: {init}</span>
            </div>
        </div>
    );
};

export default MonsterStatBlock;
