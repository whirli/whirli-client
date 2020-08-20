import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Associations from './Associations';
import Suggest from './Suggest';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Products extends AbstractResource {
    public associations: Associations;
    public suggest: Suggest;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();

        this.associations = new Associations(api);
        this.suggest = new Suggest(api);
    }

    initialise(): void {
        this.resourcePath = '/products';
        this.defaultAccess = 'guest';
    }

    /**
     * **Main endpoint for browse toys.**
     * @param {string} perPage - size of data.
     * @param {string} page - pagination.
     * @param {string} search - Search term.
     * @param {string} match - Returns all records that match the query, for example `productCategories.name:board%20games`.
     * @param {string} orderBy - Field you want to order by, for example `created_at`.
     * @param {string} sortedBy - Ascending or descending, needs `orderBy` field - `asc` or `desc`.
     * @param {string} to - Anything equal or smaller than column:number, for example `tokens:30`.
     * @param {string} from - Anything equal or large than column:number, for example `tokens:1`.
     */
    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public get: (slug: string, ...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{slug}',
    });
}
