import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class ProductLists extends AbstractResource {
    initialise(): void;
    getAll: (...args: HttpClientConfig) => HttpClientResponse;
    get: (slug: string, ...args: HttpClientConfig) => HttpClientResponse;
    updateAll: (...args: HttpClientConfig) => HttpClientResponse;
    addListLine: (...args: HttpClientConfig) => HttpClientResponse;
    updateListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
    deleteListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
    undoDeleteListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
