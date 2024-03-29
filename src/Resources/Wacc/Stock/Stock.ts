import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Stock extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/stock';
        this.defaultAccess = 'wacc';
    }

    public update: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/toybox',
    });

    public reassign: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/reassign-status',
    });

    public transitionInWarehouse: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/transition-in-warehouse',
    });

    public stockCheck: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/stock-check',
    });
}
