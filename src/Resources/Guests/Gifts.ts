import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Gifts extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/gifts',
    });

    public getActive: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-gift',
    });

    public update: (giftId: string, ...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec(
        {
            method: 'PATCH',
            path: '/gifts/{id}',
        },
    );

    public placeOrder: (
        giftId: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/gifts/{id}/pay',
    });
}
