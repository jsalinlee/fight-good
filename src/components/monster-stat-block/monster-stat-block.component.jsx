import { useEffect } from 'react';

import { getMonsterStatsByName } from '../../utils/open5e-api-service/open5e-api-service';

import './monster-stat-block.styles.scss';

const MonsterStatBlock = ({ item }) => {
    const { name, cr, size, type, alignment, ac, hp } = item;

    /*
    useEffect(() => {
        async function fetchData() {
            const stats = await getMonsterStatsByName('Baphomet');
            console.log(stats);
        }
        fetchData();
    }, []);
*/
    console.log(item);
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
