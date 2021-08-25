import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';

export default class PaymentIntents extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/payment-intents';
        this.defaultAccess = 'guest';
    }

    public succeeded: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}/succeeded',
    });
}
