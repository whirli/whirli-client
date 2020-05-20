import AssetSource from '../AssetSource';
import AssetSourceInterface from '../../../Interfaces/asset/AssetSource';
import AssetInterface from '../../../Interfaces/asset/Asset';
import BaseTransformer from '../../../BaseTransformer';
export default class AssetSourceTransformer extends BaseTransformer {
    mapData(assetSource: AssetSourceInterface): AssetSource;
    includeAssets(assetSource: AssetSourceInterface): Array<AssetInterface>;
}
