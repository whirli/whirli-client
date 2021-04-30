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
    asset?: Asset | null;
    transform?: Transform | null;
    url?: string;
    size?: string;
}
