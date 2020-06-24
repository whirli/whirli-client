import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class ShippingAddons extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/shipping-addons';
        this.defaultAccess = 'guest';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '',
    });
}
