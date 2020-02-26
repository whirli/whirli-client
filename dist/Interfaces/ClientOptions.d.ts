export interface ClientAllOptions {
    apiVersion: string;
    baseUrl: string;
    debug: boolean;
    version: string;
    features: ClientFeatureOptions;
}
export interface ClientOptions {
    apiVersion?: string;
    baseUrl?: string;
    debug?: boolean;
    version?: string;
    features?: ClientFeatureOptions;
}
export interface ClientFeatureOptions {
    trimTrailingSlash: boolean;
}
