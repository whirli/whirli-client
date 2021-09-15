import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Orders extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/courier';
        this.defaultAccess = 'wacc';
    }

    public createShipment: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/create-shipment/{id}',
    });

    public printOrder: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/print-order/{id}',
    });
}
