import AbstractResource from '../AbstractResource';
import {HttpClientConfig, HttpClientResponse} from "../../Interfaces/HttpClient";

export default class Checkout extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public checkout: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/checkout',
    });
}
