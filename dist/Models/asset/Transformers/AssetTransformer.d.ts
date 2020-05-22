import Asset from '../Asset';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetSourceInterface from '../../../Interfaces/asset/AssetSource';
import AssetTransformInterface from '../../../Interfaces/asset/AssetTransform';
import ProductInterface from '../../../Interfaces/product/Product';
import BaseTransformer from '../../../BaseTransformer';
export default class AssetTransformer extends BaseTransformer {
    mapData(asset: AssetInterface): Asset;
    includeSource(asset: AssetInterface): AssetSourceInterface | null;
    includeThumbnail(asset: AssetInterface): AssetTransformInterface | null;
    includeProducts(asset: AssetInterface): Array<ProductInterface>;
    includeTransforms(asset: AssetInterface): Array<AssetTransformInterface>;
}
