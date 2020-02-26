import HttpClient from '../../src/Interfaces/HttpClient';

export const httpClient: HttpClient = {
    get: jest.fn((...args: any) => args),
    $get: jest.fn((...args: any) => args),
    post: jest.fn((...args: any) => args),
    $post: jest.fn((...args: any) => args),
    put: jest.fn((...args: any) => args),
    $put: jest.fn((...args: any) => args),
    patch: jest.fn((...args: any) => args),
    $patch: jest.fn((...args: any) => args),
    delete: jest.fn((...args: any) => args),
    $delete: jest.fn((...args: any) => args),
};
