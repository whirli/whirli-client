import AssetSource from './AssetSource';
import AssetTransform from './AssetTransform';
import Product from '../product/Product';

export default class Asset {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    position?: number;
    location?: string;
    primary?: boolean;
    kind?: string;
    subKind?: string;
    width?: number;
    height?: number;
    title?: string;
    originalFilename?: string;
    caption?: string;
    size?: number;
    external?: boolean;
    extension?: string;
    filename?: string;
    url?: string;
    visible?: boolean;
    category?: number;
    // belongs to
    source?: AssetSource | null;
    thumbnail?: AssetTransform | null;
    // has many
    products?: Array<Product>;
    transforms?: Array<AssetTransform>;
}
