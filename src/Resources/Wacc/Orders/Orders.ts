import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class Orders extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/orders';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });

    public print: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}/print',
    });

    public getForPicking: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/pick',
    });

    public assignOrders: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/assign-user/{id}',
    });
}
