import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { BasketAddLineRequest, BasketUpdateLineRequest } from '../../Interfaces/Requests/guest/BasketRequest';
export default class Baskets extends AbstractResource {
    initialise(): void;
    get: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
    addLine: (body: BasketAddLineRequest, ...args: HttpClientConfig) => HttpClientResponse;
    updateLine: (id: string, body: BasketUpdateLineRequest, ...args: HttpClientConfig) => HttpClientResponse;
    removeLine: (id: string, ...args: HttpClientConfig) => HttpClientResponse;
}
