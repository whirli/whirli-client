import AssetSourceInterface from '../../Interfaces/asset/AssetSource';

export default class AssetSource {
    constructor(parameters: AssetSourceInterface) {
        Object.assign(this, parameters);
    }
}
