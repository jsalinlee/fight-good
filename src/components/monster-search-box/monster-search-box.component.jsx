import monsterSearchResultsJSON from '../../assets/json/monsters-search-results.json';

import './monster-search-box.styles.scss';


const MonsterSearchBox = () => {
    const searchResults = monsterSearchResultsJSON;
    return (
        <div className='monster-search-box-container'>
            <div className='monster-search-header-container'>
                <span>Monster Lookup</span>
                <input
                    type='text'
                    placeholder='input monster'
                    className='monster-search-field'></input>
            </div>
            <div className='monster-search-items-container'>
                {searchResults.map((searchResultItem) => (
                    <div
                        key={searchResultItem.name}
                        className='search-result-item'>
                        <div>{searchResultItem.name}</div>
                        <div>{searchResultItem.cr}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MonsterSearchBox;
