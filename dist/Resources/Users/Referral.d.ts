import AbstractResource from '../AbstractResource';
import { HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Referral extends AbstractResource {
    initialise(): void;
    get: () => HttpClientResponse;
}
