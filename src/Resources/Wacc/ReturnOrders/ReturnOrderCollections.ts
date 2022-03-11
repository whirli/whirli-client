import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class ReturnOrderCollections extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/return-order-collections';
        this.defaultAccess = 'wacc';
    }

    public update: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });
}
