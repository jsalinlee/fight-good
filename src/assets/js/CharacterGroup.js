import { v4 as uuidv4 } from 'uuid';

class CharacterGroup {
    constructor(
        name,
        isPlayer,
        quantity = 1,
        stats = {},
        characters = [],
        groupNum = 1
    ) {
        this.id = uuidv4();
        this.name = name;
        this.isPlayer = isPlayer;
        this.quantity = quantity;
        this.stats = stats;
        this.characters = characters;
        this.groupNum = groupNum;
    }

    addCharacter(character) {
        this.characters.push(character);
        return this;
    }
}

export default CharacterGroup;
