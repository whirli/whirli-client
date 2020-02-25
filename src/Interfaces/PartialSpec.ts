export default interface PartialSpec {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'DELETE';
    access?: 'guest' | 'member' | 'wacc';
    methodType?: string;
    path?: string;
}
