import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Gifts extends AbstractResource {
    initialise(): void;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    getActive: (...args: HttpClientConfig) => HttpClientResponse;
    get: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
    update: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
    placeOrder: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
    claimGuestBasket: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse;
}
