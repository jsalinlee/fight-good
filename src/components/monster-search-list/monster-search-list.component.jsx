import MonsterSearchItem from "../monster-search-item/monster-search-item.component";
import "./monster-search-list.styles.scss";

const MonsterSearchList = ({monsterList}) =>
    <div className="monster-search-list-container">
        {monsterList.map((monster)=>{
            return <MonsterSearchItem monster={monster} />
        })}
    </div>;

export default MonsterSearchList;