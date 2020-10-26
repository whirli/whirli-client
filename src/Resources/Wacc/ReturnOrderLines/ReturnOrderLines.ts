import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class ReturnOrderLines extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/return-order-lines';
        this.defaultAccess = 'wacc';
    }

    public updateActiveReturn: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });
}
