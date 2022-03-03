import AbstractResource from '../../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../../Interfaces/HttpClient';

export default class ShippingManifests extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/shipping-manifests';
        this.defaultAccess = 'wacc';
    }

    public update: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });
}
