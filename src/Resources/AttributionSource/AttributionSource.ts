import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class AttributionSource extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/attribution-sources';
        this.defaultAccess = 'guest';
    }

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
