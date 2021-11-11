import Asset from '../Asset';
import AssetInterface from '../../../Interfaces/asset/Asset';
import AssetSource from '../../asset/AssetSource';
import AssetTransform from '../../asset/AssetTransform';
import Product from '../../product/Product';
import AssetSourceTransformer from './AssetSourceTransformer';
import AssetTransformTransformer from './AssetTransformTransformer';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class AssetTransformer extends BaseTransformer {
    /**
     * Map an asset response
     *
     * @param asset
     */
    mapData(asset: AssetInterface): Asset {
        return new Asset({
            id: asset.id,
            createdAt: asset.createdAt,
            updatedAt: asset.updatedAt,
            position: asset.position,
            location: asset.location,
            primary: asset.primary,
            kind: asset.kind,
            subKind: asset.subKind,
            width: asset.width,
            height: asset.height,
            title: asset.title,
            originalFilename: asset.originalFilename,
            caption: asset.caption,
            size: asset.size,
            external: asset.external,
            extension: asset.extension,
            filename: asset.filename,
            visible: asset.visible,
            category: asset.category,
            url: asset.url,
            // belongs to
            source: this.includeSource(asset),
            thumbnail: this.includeThumbnail(asset),
            // has many
            products: this.includeProducts(asset),
            transforms: this.includeTransforms(asset),
        });
    }

    includeSource(asset: AssetInterface): AssetSource | null {
        return this.item(asset, 'source', new AssetSourceTransformer());
    }

    includeThumbnail(asset: AssetInterface): AssetTransform | null {
        return this.item(asset, 'thumbnail', new AssetTransformTransformer());
    }

    includeProducts(asset: AssetInterface): Array<Product> {
        return this.collection(asset, 'products', new ProductTransformer());
    }

    includeTransforms(asset: AssetInterface): Array<AssetTransform> {
        return this.collection(asset, 'transforms', new AssetTransformTransformer());
    }
}
