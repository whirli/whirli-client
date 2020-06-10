import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class ProductLists extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public get: (
        sharingSlug: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/product-lists/{sharing-slug}',
    });
}
