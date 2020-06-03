import Asset from '../Asset';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetSource from '../../asset/AssetSource';
import AssetTransform from '../../asset/AssetTransform';
import Product from '../../product/Product';
import BaseTransformer from '../../../BaseTransformer';
export default class AssetTransformer extends BaseTransformer {
    mapData(asset: AssetInterface): Asset;
    includeSource(asset: AssetInterface): AssetSource | null;
    includeThumbnail(asset: AssetInterface): AssetTransform | null;
    includeProducts(asset: AssetInterface): Array<Product>;
    includeTransforms(asset: AssetInterface): Array<AssetTransform>;
}
