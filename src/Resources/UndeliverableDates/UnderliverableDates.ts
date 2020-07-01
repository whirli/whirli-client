import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class UndeliverableDates extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/undeliverable-dates';
        this.defaultAccess = 'guest';
    }

    public all: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '',
    });
}
