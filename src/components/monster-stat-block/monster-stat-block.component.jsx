import './monster-stat-block.styles.scss';

const MonsterStatBlock = ({ item }) => {
    const { name, cr, size, type, alignment, ac, hp } = { item };
    return (
        <div>
            <h2>{name}</h2>
            <div className='stat-block-wrapper'>
                <span>Challenge Rating: {cr}</span>
                <span>Size: {size}</span>
                <span>Type: {type}</span>
                <span>Alignment: {alignment}</span>
                <span>Armor Class: {ac}</span>
                <span>Health: {hp}</span>
            </div>
        </div>
    );
};

export default MonsterStatBlock;
