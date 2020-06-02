// @todo Work out what we actually want and fix this interface to accept it
export default interface HttpClient {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $get: Function;
    $post: Function;
    [key: string]: any;
}

export type HttpClientConfig = any;

export type HttpClientResponse = any;
