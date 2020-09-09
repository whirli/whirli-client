import AbstractResource from '../AbstractResource';
import Client from '../../Client';
import Addons from '../Subscriptions/Addons';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class GuestSubscriptions extends AbstractResource {
    public addons: Addons;

    constructor(api: Client) {
        super(api);
        this.addons = new Addons(api);
    }

    initialise(): void {
        this.resourcePath = '/subscriptions';
        this.defaultAccess = 'guest';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
