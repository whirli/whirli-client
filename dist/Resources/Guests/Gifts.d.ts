import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { GiftCreateRequest } from '../../Interfaces/Requests/guest/GiftRequest';
export default class Gifts extends AbstractResource {
    initialise(): void;
    create: (body: GiftCreateRequest, ...args: HttpClientConfig) => HttpClientResponse;
    getActive: (...args: HttpClientConfig) => HttpClientResponse;
    update: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
    placeOrder: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
