import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class ProductLists extends AbstractResource {
    initialise(): void;
    getAllLists: (...args: HttpClientConfig) => HttpClientResponse;
    getList: (slug: string, ...args: HttpClientConfig) => HttpClientResponse;
    updateAll: (...args: HttpClientConfig) => HttpClientResponse;
    addListLine: (...args: HttpClientConfig) => HttpClientResponse;
    updateListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
    deleteListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
    undoDeleteListLine: (productListId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
