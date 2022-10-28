import './monster-search-header.styles.scss';


const MonsterSearchHeader = () =>{
    return(
        <div className="monster-search-header-container">
            <span>Monster Lookup</span>
            <input type="text" placeholder='input monster' className='monster-search-field'></input>
        </div>
    );

}

export default MonsterSearchHeader;


/*Code to look up as user is typing

return (
    <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
     <SearchBox 
     onChangeHandler={onSearchChange} 
     placeholder='search monsters' 
     className='monsters-search-box'/>


     <CardList monsters={filteredMonsters}/>
    </div>

const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  }
  */
