import AssetInterface from '../../Interfaces/asset/Asset';

export default class Asset {
    constructor(parameters: AssetInterface) {
        Object.assign(this, parameters);
    }
}
