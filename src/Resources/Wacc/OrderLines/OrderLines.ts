import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class OrderLines extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/order-lines';
        this.defaultAccess = 'wacc';
    }

    public update: (args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });
}
