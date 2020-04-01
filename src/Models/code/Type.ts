import TypeInterface from '../../Interfaces/code/Type';

export default class Type {
    constructor(parameters: TypeInterface) {
        Object.assign(this, parameters);
    }
}
