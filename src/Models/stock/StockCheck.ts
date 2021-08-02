import StockCheckInterface from '../../Interfaces/stock/StockCheck';

export default class StockCheck {
    constructor(parameters: StockCheckInterface) {
        Object.assign(this, parameters);
    }
}
