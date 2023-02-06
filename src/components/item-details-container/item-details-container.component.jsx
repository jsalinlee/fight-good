import MonsterStatBlock from '../monster-stat-block/monster-stat-block.component';

const ItemDetailsContainer = ({ item }) => {
    return (
        <div>
            <div>
                {console.log(item)}
                <MonsterStatBlock item={item} />
            </div>
            <div>if group, show individual combatants as list</div>
        </div>
    );
};

export default ItemDetailsContainer;
