import AssetTransform from '../AssetTransform';
import AssetTransformInterface from '../../../Interfaces/asset/AssetTransform';
import AssetInterface from '../../../Interfaces/asset/Asset';
import TransformInterface from '../../../Interfaces/asset/Transform';
import BaseTransformer from '../../../BaseTransformer';
export default class AssetTransformTransformer extends BaseTransformer {
    mapData(assetTransform: AssetTransformInterface): AssetTransform;
    includeAsset(assetTransform: AssetTransformInterface): AssetInterface | null;
    includeTransform(assetTransform: AssetTransformInterface): TransformInterface | null;
}
