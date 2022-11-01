import InitiativeListItems from "../initiative-list-items/initiative-list-items.component";
import './initiative-list.styles.scss';

const listItems = [
    {
      "name": 'Goblin',
      "id": 1
    },
    {
        "name": 'Bugbear',
        "id": 2
    },
    {
        "name": 'Aboleth',
        "id": 3
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Squirrel',
        "id": 5
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    {
        "name": 'Ancient Copper Dragon',
        "id": 4
    },
    
  ]

const InitiativeList = () =>{
    return(
        <div className="initiative-list-container">
            {listItems.map((item)=>(
                <InitiativeListItems key={item.id} item={item}/>
                
            ))}
        </div>
    );

}

export default InitiativeList;