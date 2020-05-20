import AssetTransformInterface from '../../Interfaces/asset/AssetTransform';

export default class AssetTransform {
    constructor(parameters: AssetTransformInterface) {
        Object.assign(this, parameters);
    }
}
