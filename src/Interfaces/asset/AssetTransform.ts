import Asset from './Asset';
import Transform from './Transform';

export default class AssetTransform {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    fileExists?: boolean;
    location?: string;
    filename?: string;
    transformId?: number;
    // belongs to
    asset?: Asset | null;
    transform?: Transform | null;
    // accessors
    url?: string;
    size?: string;
}
