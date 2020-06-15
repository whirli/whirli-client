import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class PricingPlans extends AbstractResource {
    initialise(): void;
    allWithChange: (...args: HttpClientConfig) => HttpClientResponse;
}
