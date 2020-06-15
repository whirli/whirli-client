import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class PricingPlans extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/subscription-pricing-plans';
        this.defaultAccess = 'member';
    }

    public allWithChange: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
