import BinStockInterface from '../../Interfaces/bin/BinStock';

export default class BinStock {
    constructor(parameters: BinStockInterface) {
        Object.assign(this, parameters);
    }
}
