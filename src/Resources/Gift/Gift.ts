import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Gift extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/redeem-gift';
        this.defaultAccess = 'member';
    }

    public redeem: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/{code}',
    });
}
