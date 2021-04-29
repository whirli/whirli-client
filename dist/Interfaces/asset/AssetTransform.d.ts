import Asset from './Asset';
import Transform from './Transform';
export default class AssetTransform {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    fileExists?: boolean;
    location?: string;
    filename?: string;
    url?: string;
    transformId?: number;
    asset?: Asset | null;
    transform?: Transform | null;
}
