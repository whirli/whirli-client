import BinInterface from '../../Interfaces/bin/Bin';

export default class Bin {
    constructor(parameters: BinInterface) {
        Object.assign(this, parameters);
    }
}
