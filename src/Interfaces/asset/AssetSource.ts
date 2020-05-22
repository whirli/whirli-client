import Asset from './Asset';

export default class AssetSource {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    handle?: string;
    disk?: string;
    default?: boolean;
    bucket?: string;
    path?: string;
    // has many
    assets?: Array<Asset>;
}
