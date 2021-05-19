import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { GiftCreateRequest, GiftPayRequest, GiftUpdateRequest } from '../../Interfaces/Requests/guest/GiftRequest';
export default class Gifts extends AbstractResource {
    initialise(): void;
    create: (body: GiftCreateRequest, ...args: HttpClientConfig) => HttpClientResponse;
    getActive: (...args: HttpClientConfig) => HttpClientResponse;
    update: (id: string, body: GiftUpdateRequest, ...args: HttpClientConfig) => HttpClientResponse;
    placeOrder: (id: string, body: GiftPayRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
