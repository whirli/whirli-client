import PurchaseStockInterface from '../../Interfaces/stock/PurchaseStock';

export default class PurchaseStock {
    constructor(parameters: PurchaseStockInterface) {
        Object.assign(this, parameters);
    }
}
