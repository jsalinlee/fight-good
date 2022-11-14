const apiMonstersURL = 'https://api.open5e.com/monsters/';

export const getMonsterStatsByName = async (monsterName) => {
    return await fetch(apiMonstersURL + monsterName)
        .then((response) => response.json())
        .then((stats) => stats);
};
