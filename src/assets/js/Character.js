import { v4 as uuidv4 } from 'uuid';

class Character {
    constructor({ name, ac, hp, isPlayer }) {
        this.id = uuidv4();
        this.name = name;
        this.ac = ac;
        this.hp = hp;
    }
}

export default Character;
