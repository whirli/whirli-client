import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Products extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/products/associations';
        this.defaultAccess = 'guest';
    }

    /**
     * Get a single product association
     * e.g. `/products/associations/disney`.
     */
    public get: (
        productAssociationSlug: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{slug}',
    });

    /**
     * Get a single product association type: age, brand, category, collection
     * e.g. `/products/associations/age`.
     */
    public getByType: (
        productAssociationTypeSlug: string,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/type/{slug}',
    });
}
