import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class ChildProfiles extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/child-profiles';
        this.defaultAccess = 'wacc';
    }

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public delete: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
