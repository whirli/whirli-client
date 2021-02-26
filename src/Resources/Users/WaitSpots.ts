import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class WaitSpots extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/wait-spots',
    });

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/wait-spots',
    });

    public delete: (
        waitSpotId: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/wait-spots/{id}',
    });
}
