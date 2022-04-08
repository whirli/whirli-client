import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class ChildProfiles extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/child-profiles',
    });

    public delete: (
        childProfileId: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/child-profiles/{id}',
    });
}
