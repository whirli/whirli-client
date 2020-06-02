export default interface HttpClient {
    $get: Function;
    $post: Function;
    [key: string]: any;
}
export declare type HttpClientConfig = any;
