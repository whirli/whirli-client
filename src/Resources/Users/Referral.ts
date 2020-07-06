import AbstractResource from '../AbstractResource';
import { HttpClientResponse } from '../../Interfaces/HttpClient';

export default class Referral extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'member';
    }

    public get: () => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/active-referral',
    });
}
