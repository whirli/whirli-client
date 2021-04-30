import AssetTransform from '../AssetTransform';
import AssetTransformInterface from '../../../Interfaces/asset/AssetTransform';
import AssetInterface from '../../../Interfaces/asset/Asset';
import TransformInterface from '../../../Interfaces/asset/Transform';
import AssetTransformer from './AssetTransformer';
import TransformTransformer from './TransformTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class AssetTransformTransformer extends BaseTransformer {
    /**
     * Map an asset transform response
     *
     * @param assetTransform
     */
    mapData(assetTransform: AssetTransformInterface): AssetTransform {
        return new AssetTransform({
            id: assetTransform.id,
            createdAt: assetTransform.createdAt,
            updatedAt: assetTransform.updatedAt,
            fileExists: assetTransform.fileExists,
            location: assetTransform.location,
            filename: assetTransform.filename,
            transformId: assetTransform.transformId,
            // belongs to
            asset: this.includeAsset(assetTransform),
            transform: this.includeTransform(assetTransform),
            // accessors
            url: assetTransform.url,
            size: assetTransform.size,
        });
    }

    includeAsset(assetTransform: AssetTransformInterface): AssetInterface | null {
        return this.item(assetTransform, 'asset', new AssetTransformer());
    }

    includeTransform(assetTransform: AssetTransformInterface): TransformInterface | null {
        return this.item(assetTransform, 'transform', new TransformTransformer());
    }
}
