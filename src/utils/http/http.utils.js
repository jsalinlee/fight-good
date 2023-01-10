const REQUEST_ENDPOINTS = {
    MONSTERS: 'https://api.open5e.com/monsters/',
};

export const getCharacterData = async (name) => {
    return await fetch(REQUEST_ENDPOINTS.MONSTERS + name)
        .then((res) => res.json())
        .then(
            (data) => {
                return data;
            },
            (error) => {
                console.info(`getCharacterData failed to fetch: ${error}`);
            }
        );
};
