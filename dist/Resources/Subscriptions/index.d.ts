import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Addons from './Addons';
import PricingPlans from './PricingPlans';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Subscriptions extends AbstractResource {
    addons: Addons;
    pricingPlans: PricingPlans;
    constructor(api: Client);
    initialise(): void;
    all: (...args: HttpClientConfig) => HttpClientResponse;
}
