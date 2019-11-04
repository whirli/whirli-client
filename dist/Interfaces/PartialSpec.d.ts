import ApiRequestBody from './ApiRequestBody';
export default interface PartialSpec {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'DELETE';
    methodType?: string;
    path?: string;
    requestBody?: ApiRequestBody;
}
