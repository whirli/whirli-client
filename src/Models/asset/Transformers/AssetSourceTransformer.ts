import AssetSource from '../AssetSource';
import AssetSourceInterface from '../../../Interfaces/asset/AssetSource';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetTransformer from './AssetTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class AssetSourceTransformer extends BaseTransformer {
    /**
     * Map an asset source response
     *
     * @param assetSource
     */
    mapData(assetSource: AssetSourceInterface): AssetSource {
        return new AssetSource({
            id: assetSource.id,
            createdAt: assetSource.createdAt,
            updatedAt: assetSource.updatedAt,
            name: assetSource.name,
            handle: assetSource.handle,
            disk: assetSource.disk,
            default: assetSource.default,
            bucket: assetSource.bucket,
            path: assetSource.path,
            // has many
            assets: this.includeAssets(assetSource),
        });
    }

    includeAssets(assetSource: AssetSourceInterface): Array<AssetInterface> {
        return this.collection(assetSource, 'assets', new AssetTransformer());
    }
}
