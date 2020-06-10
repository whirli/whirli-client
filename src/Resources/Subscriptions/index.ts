import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Addons from './Addons';
import PricingPlans from './PricingPlans';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Subscriptions extends AbstractResource {
    public addons: Addons;
    public pricingPlans: PricingPlans;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();
        this.addons = new Addons(api);
        this.pricingPlans = new PricingPlans(api);
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
