import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Transition extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/stock';
        this.defaultAccess = 'wacc';
    }

    public inWarehouse: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/transition-in-warehouse',
    });
}
