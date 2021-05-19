import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { BasketAddLineRequest, BasketUpdateLineRequest } from '../../Interfaces/Requests/guest/BasketRequest';

export default class Baskets extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public get: (id: string, ...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/baskets/{id}',
    });

    public addLine: (
        body: BasketAddLineRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/basket-lines',
    });

    public updateLine: (
        id: string,
        body: BasketUpdateLineRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/basket-lines/{id}',
    });

    public removeLine: (id: string, ...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec(
        {
            method: 'DELETE',
            path: '/basket-lines/{id}',
        },
    );
}
