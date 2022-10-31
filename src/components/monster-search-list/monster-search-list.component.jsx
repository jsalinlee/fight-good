import MonsterSearchItem from "../monster-search-item/monster-search-item.component";

const MonsterSearchList = ({monsterList}) =>
    <div>
        {monsterList.map((monster)=>{
            return <MonsterSearchItem monster={monster} />
        })}
    </div>;

export default MonsterSearchList;