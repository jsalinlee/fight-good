import { Link } from 'react-router-dom';
import './initiative-list-items.styles.scss';

const InitiativeListItem = ({item}) =>{
    const {name} = item;

    return (
        <div className='initiative-list-items-container'>
            <div className='list-item-name'>{name}</div>
            <span>
                <Link className='field-value-change' style={{textDecoration: 'none'}} onClick={()=>console.log('button click')}><b>+</b></Link>
                <input className='quantity-input-field' type='number'/> 
                <Link className='field-value-change' style={{textDecoration: 'none'}} onClick={()=>console.log('button click')}><b>-</b></Link>
                <Link className='item-delete-button' style={{textDecoration: 'none'}} onClick={()=>console.log('button click')}><b>X</b></Link>
            </span>
      </div>
    )
}

export default InitiativeListItem;