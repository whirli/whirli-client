export default interface HttpClient {
    $get: Function;
    $post: Function;
    [key: string]: any;
}
