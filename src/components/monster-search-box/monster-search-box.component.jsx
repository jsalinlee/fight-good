import monstersJSON from '../../assets/json/monsters.json';
import {useState, useEffect} from 'react';
import MonsterSearchList from '../monster-search-list/monster-search-list.component';
import './monster-search-box.styles.scss';


const MonsterSearchBox = () => {
    const searchResults = monstersJSON;
 //   const [monsters] = useState([]);
    const[searchField, setSearchField] = useState('');
    const [filteredMonsters, setFilterMonsters] = useState([]);

    /*
    useEffect(()=>{
        fetch('../../assets/monsters.json')
            .then((response)=>response.json())
            .then((monster)=>console.log(monster.name));
    }, [])
*/
    useEffect(()=>{
        const newFilteredMonsters = searchResults.filter((monster)=>{
            if(searchField !== '')
                return monster.name.toLocaleLowerCase().includes(searchField);
        })

        setFilterMonsters(newFilteredMonsters);

    }, [searchField]);

    const onSearchChange = (event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }


    return (
        <div className='monster-search-box-container'>
            <div className='monster-search-header-container'>
                <span className='search-header-title'>Monster Lookup</span>
                <input
                    onChange={onSearchChange}
                    type='text'
                    placeholder='input monster'
                    className='monster-search-field'></input>
            </div>
            <MonsterSearchList monsterList={filteredMonsters} />
        </div>
    );
};

export default MonsterSearchBox;
