import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Associations from './Associations';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Products extends AbstractResource {
    public associations: Associations;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();
        this.associations = new Associations(api);
    }

    initialise(): void {
        this.resourcePath = '/products/suggest';
        this.defaultAccess = 'guest';
    }

    /**
     * **Main endpoint for browse toys suggest.**
     * @param {string} search - Search term.
     * @param {string} match - Returns all records that match the query, for example `productCategories.name:board%20games`.
     * @param {string} orderBy - Field you want to order by, for example `created_at`.
     * @param {string} sortedBy - Ascending or descending, needs `orderBy` field - `asc` or `desc`.
     */
    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
