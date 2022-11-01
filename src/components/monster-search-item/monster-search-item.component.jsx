import { Link } from "react-router-dom";
import './monster-search-item.styles.scss'

const MonsterSearchItem = ({monster}) =>
    <div className="monster-search-item-container">
        <span className="monster-name">{monster.name}</span>
        <span className="monster-cr">{monster.cr}</span>
        <span className="monster-size">{monster.size}</span>
        <span className="monster-type">{monster.type}</span>
        <Link className='monster-add-to-list' 
            style={{textDecoration: 'none'}} 
            onClick={()=>console.log('button click')}>
                <b>+</b>
        </Link>

    </div>

export default MonsterSearchItem;
