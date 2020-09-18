import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';
export default class Orders extends AbstractResource {
    initialise(): void;
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    delete: Function;
    print: Function;
    getForPicking: Function;
    assignOrders: (...args: HttpClientConfig) => HttpClientResponse;
}
